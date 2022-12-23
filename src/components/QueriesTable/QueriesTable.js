import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { rowData } from "./queriesData";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
  },
});
export default function QueriesTable() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.client}
                  <br />
                  <small className="text-secondary">{row.level}</small>
                </TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell className="text-primary">{row.category}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.support}</TableCell>

                <TableCell>
                  <span
                    style={{
                      color: "#f0a0a0",
                      backgroundColor: "#fcecec",
                      padding: "1px",
                    }}
                    className="rounded p-1"
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
