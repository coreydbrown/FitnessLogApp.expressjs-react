import { useTheme } from "@mui/material/styles";

import { formatDateMedium } from "../../utilities/formatDate";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const WeightTable = ({ rows }) => {
  const theme = useTheme();

  return (
    <TableContainer
      sx={{
        maxWidth: 400,
        maxHeight: "60Vh",
        bgcolor: theme.palette.background.paper,
        backgroundImage: "none",
      }}
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow
            sx={{
              bgcolor: theme.palette.primary.main,
            }}
          >
            <TableCell
              align="center"
              sx={{
                color: theme.palette.primary.contrastText,
                fontSize: "1.15rem",
                fontWeight: "700",
              }}
            >
              Date
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: theme.palette.primary.contrastText,
                fontSize: "1.15rem",
                fontWeight: "700",
              }}
            >
              Weight
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {formatDateMedium(row.createdAt)}
              </TableCell>
              <TableCell align="center">{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeightTable;
