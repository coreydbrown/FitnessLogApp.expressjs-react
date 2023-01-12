import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const CircularProgressButton = ({ isLoading, isSuccess, isError }) => {
  const theme = useTheme();

  const buttonSx = {
    ...(isSuccess && {
      bgcolor: theme.palette.success.dark,
      color: theme.palette.success.contrastText,
      "&:hover": {
        bgcolor: theme.palette.success.dark,
      },
    }),
    ...(isError && {
      bgcolor: theme.palette.error.dark,
      color: theme.palette.error.contrastText,
      "&:hover": {
        bgcolor: theme.palette.error.dark,
      },
    }),
  };

  let icon = <AddOutlinedIcon fontSize="large" />;
  if (isLoading) icon = <AddOutlinedIcon fontSize="large" />;
  if (isSuccess) icon = <CheckOutlinedIcon fontSize="large" />;
  if (isError) icon = <ErrorOutlineOutlinedIcon fontSize="large" />;

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <Fab type="submit" aria-label="add weight" color="primary" sx={buttonSx}>
        {icon}
      </Fab>
      {isLoading && (
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
