import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NumberSquare = ({ number }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 100,
        width: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `5px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        margin: "25px",
        bgcolor: theme.palette.background.default,
      }}
    >
      <Typography component="span" variant="h4" color="primary">
        {number}
      </Typography>
    </Box>
  );
};

export default NumberSquare;
