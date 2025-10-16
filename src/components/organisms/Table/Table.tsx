import { TableRow } from "../../molecules/TableRow/TableRow";
import { TableHeaderRow } from "../../molecules/TableHeaderRow/TableHeaderRow";
import styles from "./Table.module.css";

interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export const Table = ({ headers, rows }: TableProps) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <TableHeaderRow headers={headers} />
    </thead>
    <tbody className={styles.tbody}>
      {rows.map((row, i) => (
        <TableRow key={i} cells={row} />
      ))}
    </tbody>
  </table>
);
