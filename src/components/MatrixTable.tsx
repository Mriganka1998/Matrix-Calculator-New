import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

interface MatrixTableProps {
  matrix: number[][];
  title: string;
}

const MatrixTable = ({ matrix, title }: MatrixTableProps) => (
  <Paper elevation={3} sx={{ p: 2, minWidth: "100%" }}>
    <Typography variant="subtitle1" align="center" gutterBottom>
      {title}
    </Typography>
    <Table size="small" sx={{ tableLayout: "fixed", width: "100%" }}>
      <TableBody>
        {matrix.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => (
              <TableCell
                key={j}
                align="center"
                sx={{
                  border: "1px solid #ccc",
                  width: `${100 / row.length}%`,
                  padding: "6px",
                  fontSize: "0.9rem",
                }}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default MatrixTable;
