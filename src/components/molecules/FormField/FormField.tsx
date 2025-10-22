import styles from "./FormField.module.css";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/Input/Input";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  component?: React.ReactNode;
  required?: boolean;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  component,
  required = false
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <Label htmlFor={id} required={required}>{label}</Label>

      {component ? (
        component
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => onChange?.(e.target.value)}
          error={Boolean(error)}
        />
      )}

      <p className={styles.error}>{error || ""}</p>
    </div>
  );
}
