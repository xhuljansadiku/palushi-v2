/** Client-side form validation helpers */

export function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email is required";
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) return "Please enter a valid email address";
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return "Phone is required";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return "Please enter a valid phone number";
  return null;
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value.trim()) return `${fieldName} is required`;
  return null;
}

export function validateLegalConsent(accepted: boolean): string | null {
  if (!accepted) return "Please confirm you agree to the terms and privacy policy to submit this form.";
  return null;
}
