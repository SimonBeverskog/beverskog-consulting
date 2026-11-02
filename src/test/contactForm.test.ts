import { describe, expect, it } from "vitest";
import { emptyContactForm, isLikelySpam, validateContactForm } from "@/lib/contactForm";

const valid = {
  ...emptyContactForm,
  name: "Anna Andersson",
  email: "anna@example.se",
  assignmentType: "Fågelinventeringar",
  message: "Vi planerar en avverkning och behöver en fågelinventering.",
};

describe("kontaktformulärets validering", () => {
  it("godkänner ett ifyllt formulär där frivilliga fält är tomma", () => {
    expect(validateContactForm(valid)).toEqual({});
  });

  it("kräver namn, e-post, typ av uppdrag och meddelande", () => {
    const errors = validateContactForm(emptyContactForm);
    expect(Object.keys(errors).sort()).toEqual(["assignmentType", "email", "message", "name"]);
  });

  it("underkänner en felaktig e-postadress", () => {
    expect(validateContactForm({ ...valid, email: "anna@" }).email).toBeDefined();
  });

  it("underkänner telefonnummer med bokstäver men tillåter tomt", () => {
    expect(validateContactForm({ ...valid, phone: "ring mig" }).phone).toBeDefined();
    expect(validateContactForm({ ...valid, phone: "070-889 65 88" }).phone).toBeUndefined();
  });

  it("begränsar meddelandet till 2000 tecken", () => {
    expect(validateContactForm({ ...valid, message: "a".repeat(2001) }).message).toBeDefined();
  });
});

describe("skräppostskydd", () => {
  it("flaggar ifyllt dolt fält och för snabb inskickning", () => {
    expect(isLikelySpam({ ...valid, website: "http://spam" }, 0, 10_000)).toBe(true);
    expect(isLikelySpam(valid, 0, 1_000)).toBe(true);
    expect(isLikelySpam(valid, 0, 10_000)).toBe(false);
  });
});
