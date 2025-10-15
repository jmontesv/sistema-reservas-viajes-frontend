import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  placeholder?: string;
}

export default function Input({ disabled = false, ...props }: InputProps) {
  const classNames = [
    styles.input,
    disabled ? styles.disabled : ""
  ].join(" ");

  return <input className={classNames} disabled={disabled} {...props} />;
}
