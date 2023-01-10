import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green, red } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

const CircularProgressButton = ({ status, error }) => {
  const buttonSx = {
    ...(status === "succeeded" && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
    ...(status === "failed" && {
      bgcolor: red[500],
      "&:hover": {
        bgcolor: red[700],
      },
    }),
  };

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <Fab type="submit" aria-label="add weight" color="primary" sx={buttonSx}>
        {status === "idle" && <AddOutlinedIcon fontSize="large" />}
        {status === "loading" && <AddOutlinedIcon fontSize="large" />}
        {status === "succeeded" && <CheckOutlinedIcon fontSize="large" />}
        {status === "failed" && <ErrorOutlineOutlinedIcon fontSize="large" />}
      </Fab>
      {status === "loading" && (
        <CircularProgress
          size={68}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default CircularProgressButton;
