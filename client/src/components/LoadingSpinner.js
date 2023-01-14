import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop={10}>
      <CircularProgress size={60} />
    </Box>
  );
};

export default LoadingSpinner;
