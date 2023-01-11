import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const CircularProgressButton = ({ status, error }) => {
  const theme = useTheme();

  const buttonSx = {
    ...(status === "succeeded" && {
      bgcolor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
      "&:hover": {
        bgcolor: theme.palette.success.dark,
      },
    }),
    ...(status === "failed" && {
      bgcolor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
      "&:hover": {
        bgcolor: theme.palette.error.dark,
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
            color: theme.palette.success.dark,
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
