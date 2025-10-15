import type { FormHTMLAttributes } from "react";
import FormField from "../../molecules/FormField/FormField";
import styles from "./FormSearch.module.css";
import Button from "../../atoms/Button/Button";
import DatePicker from "../../atoms/DatePicker/DatePicker";
import Label from "../../atoms/label/Label";


interface FormSearchProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormSearch({ onSubmit, ...props}: FormSearchProps) {
  return (
    <form onSubmit={onSubmit} className={styles.form} {...props}>
      <FormField
        id="origin"
        label="Origen"
        type="text"
        placeholder="Introduce el origen"
      />
       <FormField
        id="destination"
        label="Destino"
        type="text"
        placeholder="Introduce el destino"
      />
      <p>
        <Label>Fecha</Label>
        <DatePicker />
      </p>
      <Button type="submit" >
        Buscar
      </Button>
    </form>
  );
}