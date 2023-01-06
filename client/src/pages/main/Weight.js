import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";

const Weight = () => {
  const theme = useTheme();

  const rows = [
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
    { date: "11/16/22", weight: 142.6 },
    { date: "11/17/22", weight: 142.3 },
    { date: "11/18/22", weight: 142.8 },
  ];

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box component="form" display="flex" alignItems="center" mb={3}>
          <Typography component="h3" display="inline" mr={1}>
            Add your weight for today
          </Typography>
          <TextField
            label="Weight"
            id="weight"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment>lbs</InputAdornment>,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ width: "120px" }}
          />
          <IconButton aria-label="add weight">
            <AddCircleOutlined fontSize="large" />
          </IconButton>
        </Box>

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
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">{row.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Weight;
