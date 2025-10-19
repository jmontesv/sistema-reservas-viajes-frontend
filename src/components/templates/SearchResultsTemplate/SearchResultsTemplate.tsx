import { type ReactNode } from "react";
import styles from "./SearchResultsTemplate.module.css";

import FormSearch from "../../organisms/FormSearch/FormSearch";
import { SectionTitle } from "../../atoms/SectionTitle/SectionTitle";
import { Table } from "../../organisms/Table/Table";
import LoadingOverlay from "../../atoms/LoadingOverlay/LoadingOverlay";

interface SearchResultsTemplateProps {
  title: string;
  headers: string[];
  rows: (string | number | ReactNode)[][]; 
  isLoading: boolean;
  error?: string | null;
  onSearch: (values: any) => void;
  children?: ReactNode;
}

export default function SearchResultsTemplate({
  title,
  headers,
  rows,
  isLoading,
  error,
  onSearch,
  children,
}: SearchResultsTemplateProps) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.searchSection}>
          <FormSearch onSubmit={onSearch} />
        </section>
        <SectionTitle>{title}</SectionTitle>

        <LoadingOverlay isLoading={isLoading}>
          {error && <p className={styles.error}>{error}</p>}
          
          {!error && rows.length > 0 && <Table headers={headers} rows={rows} />}
          
          {!error && rows.length === 0 && (
            <p className={styles.empty}>No se encontraron resultados</p>
          )}
        </LoadingOverlay>

        {children}
      </main>
    </div>
  );
}
