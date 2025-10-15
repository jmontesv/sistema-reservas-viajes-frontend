import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    variant?: ButtonVariant;
    disabled?: boolean;
    children: React.ReactNode;
}

export default function Button({ variant = "primary", disabled = false, children, ...props }: ButtonProps) {
  const classNames = [
    styles.btn,
    styles[variant],
    disabled ? styles.disabled : ""
  ].join(" ");

  return (
    <button className={classNames} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
