import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { services } from "@/data/services";
import { EMAIL, PHONE_DISPLAY, PHONE_E164 } from "@/data/site";
import {
  contactLimits,
  emptyContactForm,
  isLikelySpam,
  requiredContactFields,
  validateContactForm,
  type ContactErrors,
  type ContactField,
  type ContactFormValues,
} from "@/lib/contactForm";
import { cn } from "@/lib/utils";

const assignmentOptions = [...services.map((s) => s.title), "Annat / vet inte än"];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm";

interface ContactSectionProps {
  /** Förvald typ av uppdrag, t.ex. tjänstens namn på en tjänstesida. */
  defaultAssignmentType?: string;
}

const ContactSection = ({ defaultAssignmentType }: ContactSectionProps) => {
  const initial: ContactFormValues = {
    ...emptyContactForm,
    assignmentType: defaultAssignmentType && assignmentOptions.includes(defaultAssignmentType) ? defaultAssignmentType : "",
  };
  const [form, setForm] = useState<ContactFormValues>(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const renderedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const update = (field: keyof ContactFormValues, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as ContactField]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateContactForm(form);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as ContactField[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    if (isLikelySpam(form, renderedAt.current, Date.now())) {
      // Visa samma bekräftelse men skicka inget.
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", { body: form });
      if (error) throw error;
      setStatus("sent");
      setForm(initial);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  const fieldProps = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    value: form[field],
    maxLength: contactLimits[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    "aria-required": requiredContactFields.includes(field) || undefined,
    className: cn("bg-card", errors[field] && "border-destructive"),
  });

  const FieldLabel = ({ field, children }: { field: ContactField; children: React.ReactNode }) => (
    <Label htmlFor={`contact-${field}`} className="mb-1.5 block font-body text-sm font-semibold text-foreground">
      {children}
      {requiredContactFields.includes(field) ? (
        <span className="text-destructive" aria-hidden="true"> *</span>
      ) : (
        <span className="font-normal text-muted-foreground"> (valfritt)</span>
      )}
    </Label>
  );

  const FieldError = ({ field }: { field: ContactField }) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 text-sm text-destructive font-body">
        {errors[field]}
      </p>
    ) : null;

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Begär offert
          </p>
          <h2 id="contact-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kontakt
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            Beskriv ditt projekt så återkommer jag med förslag på upplägg, tidplan och pris för
            naturvärdesinventering, fågelinventering, artskyddsutredning eller skoglig rådgivning.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            {status === "sent" ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="rounded-lg border border-primary/30 bg-card p-8 text-center focus:outline-none"
              >
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Tack, din förfrågan är skickad!</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Jag återkommer till dig så snart jag kan, oftast inom ett par arbetsdagar. Brådskande? Ring{" "}
                  <a href={`tel:${PHONE_E164}`} className="text-primary underline underline-offset-4">{PHONE_DISPLAY}</a>.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Skicka en ny förfrågan</Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="contact-required-note">
                <p id="contact-required-note" className="text-sm text-muted-foreground font-body">
                  Fält markerade med <span className="text-destructive">*</span> är obligatoriska.
                </p>

                {errorCount > 0 && (
                  <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm font-body text-foreground">
                    Kontrollera {errorCount === 1 ? "det markerade fältet" : `de ${errorCount} markerade fälten`} och försök igen.
                  </div>
                )}
                {status === "error" && (
                  <div role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm font-body text-foreground">
                    Förfrågan kunde inte skickas just nu. Dina uppgifter finns kvar – försök igen om en stund, eller
                    mejla <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
                  </div>
                )}

                {/* Dolt fält mot skräppost – lämnas tomt av människor */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Lämna detta fält tomt</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel field="name">Namn</FieldLabel>
                    <Input {...fieldProps("name")} autoComplete="name" onChange={(e) => update("name", e.target.value)} />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <FieldLabel field="organization">Organisation eller företag</FieldLabel>
                    <Input {...fieldProps("organization")} autoComplete="organization" onChange={(e) => update("organization", e.target.value)} />
                    <FieldError field="organization" />
                  </div>
                  <div>
                    <FieldLabel field="email">E-post</FieldLabel>
                    <Input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" onChange={(e) => update("email", e.target.value)} />
                    <FieldError field="email" />
                  </div>
                  <div>
                    <FieldLabel field="phone">Telefon</FieldLabel>
                    <Input {...fieldProps("phone")} type="tel" autoComplete="tel" inputMode="tel" onChange={(e) => update("phone", e.target.value)} />
                    <FieldError field="phone" />
                  </div>
                  <div>
                    <FieldLabel field="assignmentType">Typ av uppdrag</FieldLabel>
                    <select
                      {...fieldProps("assignmentType")}
                      className={cn(selectClass, errors.assignmentType && "border-destructive")}
                      onChange={(e) => update("assignmentType", e.target.value)}
                    >
                      <option value="">Välj typ av uppdrag</option>
                      {assignmentOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <FieldError field="assignmentType" />
                  </div>
                  <div>
                    <FieldLabel field="area">Kommun eller geografiskt område</FieldLabel>
                    <Input {...fieldProps("area")} placeholder="t.ex. Sundsvalls kommun" onChange={(e) => update("area", e.target.value)} />
                    <FieldError field="area" />
                  </div>
                  <div className="sm:col-span-2">
                    <FieldLabel field="plannedAction">Planerad åtgärd</FieldLabel>
                    <Input {...fieldProps("plannedAction")} placeholder="t.ex. avverkning, vindkraft, ny kraftledning, detaljplan" onChange={(e) => update("plannedAction", e.target.value)} />
                    <FieldError field="plannedAction" />
                  </div>
                  <div>
                    <FieldLabel field="extent">Ungefärlig areal eller sträckning</FieldLabel>
                    <Input {...fieldProps("extent")} placeholder="t.ex. 40 ha eller 12 km" onChange={(e) => update("extent", e.target.value)} />
                    <FieldError field="extent" />
                  </div>
                  <div>
                    <FieldLabel field="timeline">Önskad tidplan</FieldLabel>
                    <Input {...fieldProps("timeline")} placeholder="t.ex. fältsäsong 2027" onChange={(e) => update("timeline", e.target.value)} />
                    <FieldError field="timeline" />
                  </div>
                </div>

                <div>
                  <FieldLabel field="message">Meddelande</FieldLabel>
                  <Textarea
                    {...fieldProps("message")}
                    rows={5}
                    className={cn("bg-card resize-y", errors.message && "border-destructive")}
                    placeholder="Berätta kort om projektet och vad underlaget ska användas till"
                    onChange={(e) => update("message", e.target.value)}
                  />
                  <FieldError field="message" />
                </div>

                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Integritet: uppgifterna du skickar används endast för att besvara din förfrågan och ta fram en
                  offert. De lämnas inte vidare till andra.
                </p>

                <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Skickar...
                    </>
                  ) : (
                    "Begär offert"
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">E-post</h3>
                <a href={`mailto:${EMAIL}`} className="text-muted-foreground text-sm font-body hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Telefon</h3>
                <a href={`tel:${PHONE_E164}`} className="text-muted-foreground text-sm font-body hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Plats</h3>
                <p className="text-muted-foreground text-sm font-body">
                  Sverige
                  <br />
                  Tillgänglig för uppdrag i hela landet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
