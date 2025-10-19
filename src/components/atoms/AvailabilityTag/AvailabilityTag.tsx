import styles from "./AvailabilityTag.module.css";

interface AvailabilityTagProps {
  available: boolean;
}

export default function AvailabilityTag({ available }: AvailabilityTagProps) {
  const className = available ? styles.available : styles.unavailable;
  const label = available ? "Reservable" : "No disponible";

  return <span className={`${styles.tag} ${className}`}>{label}</span>;
}
