export interface ContactFormValues {
  name: string;
  organization: string;
  email: string;
  phone: string;
  assignmentType: string;
  area: string;
  plannedAction: string;
  extent: string;
  timeline: string;
  message: string;
  /** Dolt fält som bara skräppostrobotar fyller i */
  website: string;
}

export type ContactField = Exclude<keyof ContactFormValues, "website">;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const emptyContactForm: ContactFormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  assignmentType: "",
  area: "",
  plannedAction: "",
  extent: "",
  timeline: "",
  message: "",
  website: "",
};

export const contactLimits: Record<ContactField, number> = {
  name: 100,
  organization: 150,
  email: 255,
  phone: 30,
  assignmentType: 100,
  area: 150,
  plannedAction: 300,
  extent: 100,
  timeline: 100,
  message: 2000,
};

export const requiredContactFields: ContactField[] = ["name", "email", "assignmentType", "message"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{5,29}$/;

/** Returnerar felmeddelanden på svenska per fält. Tomt objekt = giltigt. */
export const validateContactForm = (v: ContactFormValues): ContactErrors => {
  const errors: ContactErrors = {};
  const t = (f: ContactField) => v[f].trim();

  if (!t("name")) errors.name = "Ange ditt namn.";
  else if (t("name").length < 2) errors.name = "Namnet behöver vara minst 2 tecken.";

  if (!t("email")) errors.email = "Ange din e-postadress.";
  else if (!EMAIL_RE.test(t("email"))) errors.email = "Ange en giltig e-postadress, till exempel namn@foretag.se.";

  if (t("phone") && !PHONE_RE.test(t("phone")))
    errors.phone = "Ange ett giltigt telefonnummer med siffror, till exempel 070-123 45 67.";

  if (!t("assignmentType")) errors.assignmentType = "Välj vilken typ av uppdrag det gäller.";

  if (!t("message")) errors.message = "Skriv ett kort meddelande om ditt projekt.";
  else if (t("message").length < 10) errors.message = "Beskriv ditt projekt med minst 10 tecken.";

  (Object.keys(contactLimits) as ContactField[]).forEach((f) => {
    if (!errors[f] && v[f].length > contactLimits[f]) {
      errors[f] = `Texten får vara högst ${contactLimits[f]} tecken.`;
    }
  });

  return errors;
};

/** Minsta tid (ms) mellan att formuläret visas och skickas – snabbare än så är troligen en robot. */
export const MIN_FILL_TIME_MS = 3000;

export const isLikelySpam = (v: ContactFormValues, renderedAt: number, now: number) =>
  v.website.trim() !== "" || now - renderedAt < MIN_FILL_TIME_MS;
