import { z } from "zod";

/**
 * Lead form contract. Shared by the client form and the API route so both
 * validate identically. Phone is required (that is how contractors call back);
 * email is optional.
 */
export const leadSchema = z.object({
  /** Which site the lead came from, e.g. "agency" or "demo-roofing". */
  site: z.string().min(1).max(60),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a phone number we can call").max(30),
  email: z
    .string()
    .trim()
    .max(120)
    .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Please enter a valid email")
    .optional(),
  address: z.string().trim().max(200).optional(),
  service: z.string().trim().min(1, "Please choose a service").max(100),
  message: z.string().trim().max(2000).optional(),
  /** Honeypot. Real users never fill this. */
  company: z.string().max(200).optional(),
  page: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type FieldErrors = Partial<Record<keyof LeadInput, string>>;

export function fieldErrorsFrom(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "") as keyof LeadInput;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
