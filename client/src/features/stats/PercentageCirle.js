import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PercentageCircle = ({ percentage }) => {
  const theme = useTheme();
  const angle = (percentage / 100) * 360;
  const size = "150";

  return (
    <Box
      sx={{
        background: `radial-gradient(${theme.palette.background.paper} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.background.default} ${angle}deg 360deg),
            ${theme.palette.primary.main}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Box
        sx={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <Typography
          component="span"
          variant="h4"
          color="primary"
        >{`${percentage}%`}</Typography>
      </Box>
    </Box>
  );
};

export default PercentageCircle;
