import { TableHeaderCell } from "../../atoms/TableHeaderCell/TableHeaderCell";

interface TableHeaderRowProps {
  headers: React.ReactNode[];
}
export const TableHeaderRow = ({ headers }: TableHeaderRowProps) => (
  <tr>
    {headers.map((header, index) => (
      <TableHeaderCell key={index}>{header}</TableHeaderCell>
    ))}
  </tr>
);
