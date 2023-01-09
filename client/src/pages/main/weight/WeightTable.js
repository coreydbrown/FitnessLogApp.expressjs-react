import { getAllWeights } from "../../../services/weights";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// const rows = [
//   { date: "11/16/22", weight: 142.6 },
//   { date: "11/17/22", weight: 142.3 },
//   { date: "11/18/22", weight: 142.8 },
// ];

let rows = [];
const getData = async () => {
  try {
    const data = await getAllWeights();
    rows = data.weights;
    // console.log(weights);
    // rows = weights.map((weightObj) => {
    //   return {
    //     date: weightObj.date,
    //     weight: weightObj.weight,
    //   };
    // });
  } catch (error) {
    console.log(error);
  }
};
getData();

const WeightTable = () => {
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
                {moment(row.createdAt).format("MMM Do, YYYY")}
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
