import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  origin?: string;
  destination?: string;
  children?: React.ReactNode;
}

export const SectionTitle = ({ origin, destination, children }: SectionTitleProps) => {
  const text =
    children ??
    (origin && destination
      ? `Viajes desde ${origin} hacia ${destination}`
      : "Resultados de viajes");

  return <h2 className={styles.title}>{text}</h2>;
};
