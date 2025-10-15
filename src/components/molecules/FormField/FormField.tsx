import Label from "../../atoms/label/Label";
import Input from "../../atoms/Input/Input";
import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  id: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

export default function FormField({
  label,
  id,
  required = false,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled = false
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
