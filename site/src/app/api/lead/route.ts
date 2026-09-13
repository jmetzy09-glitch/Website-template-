import { NextResponse } from "next/server";
import { leadSchema, fieldErrorsFrom, type LeadInput } from "@/lib/validate";
import { siteConfig } from "@/content/site.config";

/**
 * Lead intake. Validates, drops honeypot hits, rate limits per IP, then emails
 * the owner via Resend when configured. When email is not configured the lead
 * is logged so it is never silently lost. Later this route fans out to SMS,
 * CRM and missed-call flows without changing the form.
 */

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const buckets = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  buckets.set(ip, recent);
  return false;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

function leadToHtml(lead: LeadInput): string {
  const rows: Array<[string, string | undefined]> = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Address", lead.address],
    ["Service", lead.service],
    ["Message", lead.message],
    ["Site", lead.site],
    ["Page", lead.page],
  ];
  const body = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><b>${k}</b></td><td style="padding:4px 0">${escapeHtml(v ?? "")}</td></tr>`)
    .join("");
  return `<table style="font-family:system-ui,sans-serif;font-size:15px">${body}</table>`;
}

async function sendEmail(lead: LeadInput, to: string, apiKey: string): Promise<void> {
  const from = process.env.LEAD_FROM_EMAIL ?? "Website Leads <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email || undefined,
      subject: `New lead: ${lead.name} — ${lead.service} (${lead.site})`,
      html: leadToHtml(lead),
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please call us instead." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, fieldErrors: fieldErrorsFrom(parsed.error) }, { status: 400 });
  }
  const lead = parsed.data;

  // Honeypot filled: pretend success so bots learn nothing.
  if (lead.company) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const to = process.env.LEAD_TO_EMAIL ?? siteConfig.business.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!to || !apiKey) {
    console.log("[lead] email not configured; lead logged only", JSON.stringify(lead));
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    await sendEmail(lead, to, apiKey);
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] email send failed", err, JSON.stringify(lead));
    return NextResponse.json(
      { ok: false, error: "We could not send your request. Please call us and we will take care of you." },
      { status: 502 },
    );
  }
}
