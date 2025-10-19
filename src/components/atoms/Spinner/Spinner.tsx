import styles from "./Spinner.module.css";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "gray";
}

export default function Spinner({ size = "md", color = "primary" }: SpinnerProps) {
  return (
    <div
      className={`${styles.spinner} ${styles[size]} ${styles[color]}`}
      role="status"
      aria-label="Cargando"
    >
      <div className={styles.inner}></div>
    </div>
  );
}
