import "./accountstable.css";

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

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
  },
});
export default function AccountsTable() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer className="table" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">S/N</TableCell>
              <TableCell className="tableCell">Account Name</TableCell>
              <TableCell className="tableCell">Account ID</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <p className="table-text">No records found</p>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
