/**
 * Form field validators
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s\-()]{7,}$/;

export function validateName(name) {
  if (!name?.trim()) return "Name is required.";
  if (name.trim().length < 2) return "Use your full name.";
  return "";
}

export function validateEmail(email) {
  if (!email?.trim()) return "Email is required.";
  if (!EMAIL_REGEX.test(email)) return "Enter a valid email address.";
  return "";
}

export function validatePhone(phone) {
  if (!phone?.trim()) return "Phone is required.";
  if (!PHONE_REGEX.test(phone)) return "Enter a valid phone number.";
  return "";
}

export function validateProjectType(projectType) {
  if (!projectType) return "Select a project type.";
  return "";
}

export function validateLocation(location) {
  if (!location?.trim()) return "Location is required.";
  return "";
}

export function validateMessage(message) {
  if (!message?.trim()) return "Tell us about the lift.";
  if (message.trim().length < 10) return "Add a bit more detail (min 10 chars).";
  return "";
}

/**
 * Validate entire contact form
 */
export function validateContactForm(formData) {
  const errors = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const projectTypeError = validateProjectType(formData.projectType);
  if (projectTypeError) errors.projectType = projectTypeError;

  const locationError = validateLocation(formData.location);
  if (locationError) errors.location = locationError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return errors;
}
