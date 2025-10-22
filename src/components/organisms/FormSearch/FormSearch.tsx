import { useState } from "react";
import type { FormHTMLAttributes } from "react";
import FormField from "../../molecules/FormField/FormField";
import styles from "./FormSearch.module.css";
import Button from "../../atoms/Button/Button";
import DatePicker from "../../atoms/DatePicker/DatePicker";

import { type FormValues, type FormErrors, validateFormSearch, validateField } from "../../../utils/validation";

/* Omitimos la propiedad onSubmit nativa para poder declarar la nuestra */
interface FormSearchProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (values: FormValues) => void;
}

export default function FormSearch({ onSubmit, ...props }: FormSearchProps) {
  const [values, setValues] = useState<FormValues>({
    origin: "",
    destination: "",
    date: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    // Validar solo ese campo
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateFormSearch(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };
  
  const isDisabled =
    !values.date || Object.keys(validateFormSearch(values)).length > 0;

  return (
    <form onSubmit={handleSubmit} className={styles.form} {...props}>
      <FormField
        id="origin"
        label="Origen"
        type="text"
        placeholder="Introduce el origen (opcional)"
        value={values.origin}
        onChange={(value: string) => handleChange("origin", value)}
      />
      <FormField
        id="destination"
        label="Destino"
        type="text"
        placeholder="Introduce el destino (opcional)"
        value={values.destination}
        onChange={(value: string) => handleChange("destination", value)}
      />
      <FormField
        id="date"
        label="Fecha"
        error={errors.date}
        required
        component={
          <DatePicker
            value={values.date}
            onChange={(value: string) => handleChange("date", value)}
            placeholder="Selecciona una fecha"
            error={Boolean(errors.date)}
          />
        }
      />
      <Button type="submit" variant="primary" disabled={isDisabled}>
        Buscar
      </Button>
    </form>
  );
}
