import { useState } from "react";

/**
 * useFormValidation - Manages form state, validation, and error handling
 * Returns form state, errors, validation function, and form action handlers
 */
export function useFormValidation(initialState, onSubmit) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const setFieldValue = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const reset = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = async (validationFn) => {
    const validationErrors = validationFn(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setSubmitting(true);
    try {
      await onSubmit(form);
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialState);
      return true;
    } catch {
      setSubmitting(false);
      return false;
    }
  };

  return {
    form,
    errors,
    submitted,
    submitting,
    updateField,
    setFieldValue,
    setSubmitted,
    reset,
    handleSubmit,
  };
}
