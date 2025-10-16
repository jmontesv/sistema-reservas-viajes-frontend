import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
}

export default function Input({ disabled = false, ...props }: InputProps) {
  const classNames = [
    styles.input,
    props.error ? styles.inputError : "",
    disabled ? styles.disabled : ""
  ].join(" ");

  return <input className={classNames} disabled={disabled} {...props} />;
}
