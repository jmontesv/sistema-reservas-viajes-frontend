import styles from "./LoadingOverlay.module.css";
import Spinner from "../Spinner/Spinner";

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export default function LoadingOverlay({ isLoading, children }: LoadingOverlayProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      {isLoading && (
        <div className={styles.overlay}>
          <Spinner size="lg" color="primary" />
        </div>
      )}
    </div>
  );
}
