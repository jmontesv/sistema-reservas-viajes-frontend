import { TableCell } from "../../atoms/TableCell/TableCell";

interface TableRowProps {
  cells: React.ReactNode[];
}
export const TableRow = ({ cells }: TableRowProps) => (
  <tr>
    {cells.map((cell, index) => (
      <TableCell key={index}>{cell}</TableCell>
    ))}
  </tr>
);
