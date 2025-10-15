import styles from "./Label.module.css";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export default function Label({ children, required = false, ...props }: LabelProps) {
  const classNames = [
    styles.label,
    required ? styles["label--required"] : ""
  ].join(" ");

  return (
    <label className={classNames} {...props}>
      {children}
    </label>
  );
}
