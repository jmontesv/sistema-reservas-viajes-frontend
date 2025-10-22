export interface FormValues {
  origin: string;
  destination: string;
  date: string;
}

export interface FormErrors {
  date?: string;
}

/**
 * Valida los campos del formulario de búsqueda de viajes
 * - Fecha es obligatoria
 * - Origen y destino opcionales
 */
export function validateFormSearch(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.date) {
    errors.date = "La fecha es obligatoria";
  } else if (isNaN(new Date(values.date).getTime())) {
    errors.date = "La fecha no es válida";
  }

  return errors;
};

export function validateField(field: keyof FormValues, value: string) {
  switch (field) {
    case "date":
      return !value ? "La fecha es obligatoria" : "";
    default:
      return "";
  }
}
