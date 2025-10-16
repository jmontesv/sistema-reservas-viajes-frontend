import { useState } from "react";
import type { FormHTMLAttributes } from "react";
import FormField from "../../molecules/FormField/FormField";
import styles from "./FormSearch.module.css";
import Button from "../../atoms/Button/Button";
import DatePicker from "../../atoms/DatePicker/DatePicker";
import Label from "../../atoms/label/Label";

import { type FormValues, type FormErrors, validateFormSearch } from "../../../utils/validation";

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


  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.date) {
      errors.date = "La fecha es obligatoria";
    } else if (isNaN(new Date(values.date).getTime())) {
      errors.date = "La fecha no es válida";
    }
    return errors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    setErrors(validateFormSearch(newValues)); // ✅ validación en tiempo real
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };
  
  const isDisabled =
    !values.date || Object.keys(validate(values)).length > 0;

  return (
    <form onSubmit={handleSubmit} className={styles.form} {...props}>
      <FormField
        id="origin"
        label="Origen"
        type="text"
        placeholder="Introduce el origen (opcional)"
        value={values.origin}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("origin", e.target.value)
        }
      />

      <FormField
        id="destination"
        label="Destino"
        type="text"
        placeholder="Introduce el destino (opcional)"
        value={values.destination}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("destination", e.target.value)
        }
      />

      <div className={styles.dateField}>
        <Label required>Fecha</Label>
        <div className={styles.errorWrapper}>
          <DatePicker
            value={values.date}
            onChange={(date) => handleChange("date", date)}
            placeholder="Selecciona una fecha"
            error={Boolean(errors.date)}
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}
        </div>
      </div>

      <Button type="submit" variant="primary" disabled={isDisabled}>
        Buscar
      </Button>
    </form>
  );
}
