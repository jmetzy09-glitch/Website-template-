"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { leadSchema, fieldErrorsFrom, type FieldErrors } from "@/lib/validate";
import { cn } from "@/lib/cn";

interface ServiceOption {
  value: string;
  label: string;
}

interface LeadFormProps {
  /** Identifies the site in the lead email, e.g. "agency" or "demo-roofing". */
  siteKey: string;
  services: ServiceOption[];
  submitLabel: string;
  /** Where to send the user after a successful submission. */
  successHref: string;
  showAddress?: boolean;
  messagePlaceholder?: string;
  /** Shown under the submit button. */
  reassurance?: string;
}

const inputClass =
  "mt-1.5 block w-full rounded-md border border-ink/20 bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted/70 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-[invalid=true]:border-red-600";
const labelClass = "block text-sm font-semibold text-ink";
const errorClass = "mt-1 text-sm text-red-700";

export function LeadForm({
  siteKey,
  services,
  submitLabel,
  successHref,
  showAddress = false,
  messagePlaceholder,
  reassurance,
}: LeadFormProps) {
  const router = useRouter();
  const id = useId();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const payload = { ...data, site: siteKey, page: typeof window !== "undefined" ? window.location.pathname : "" };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(fieldErrorsFrom(parsed.error));
      setStatus("error");
      setFormError(null);
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string; fieldErrors?: FieldErrors };
      if (!res.ok || !json.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors);
        setFormError(json.error ?? "Something went wrong. Please call us.");
        setStatus("error");
        return;
      }
      router.push(successHref);
    } catch {
      setFormError("We could not reach the server. Please call us.");
      setStatus("error");
    }
  }

  const field = (name: keyof FieldErrors) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input {...field("name")} type="text" autoComplete="name" required className={inputClass} />
          {errors.name ? <p id={`${id}-name-error`} className={errorClass}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input {...field("phone")} type="tel" autoComplete="tel" required className={inputClass} />
          {errors.phone ? <p id={`${id}-phone-error`} className={errorClass}>{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-email`} className={labelClass}>
          Email <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input {...field("email")} type="email" autoComplete="email" className={inputClass} />
        {errors.email ? <p id={`${id}-email-error`} className={errorClass}>{errors.email}</p> : null}
      </div>

      {showAddress ? (
        <div>
          <label htmlFor={`${id}-address`} className={labelClass}>
            Property address <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input {...field("address")} type="text" autoComplete="street-address" className={inputClass} />
          {errors.address ? <p id={`${id}-address-error`} className={errorClass}>{errors.address}</p> : null}
        </div>
      ) : null}

      <div>
        <label htmlFor={`${id}-service`} className={labelClass}>
          What do you need? <span aria-hidden="true">*</span>
        </label>
        <select {...field("service")} required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.service ? <p id={`${id}-service-error`} className={errorClass}>{errors.service}</p> : null}
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Details <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <textarea {...field("message")} rows={4} placeholder={messagePlaceholder} className={inputClass} />
        {errors.message ? <p id={`${id}-message-error`} className={errorClass}>{errors.message}</p> : null}
      </div>

      {/* Honeypot: hidden from people, attractive to bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError ? (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-70 sm:w-auto",
        )}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
      {reassurance ? <p className="text-sm text-ink-muted">{reassurance}</p> : null}
    </form>
  );
}
