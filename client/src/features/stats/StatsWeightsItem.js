import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StatsWeightsItem = ({ weightStatItem }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 3,
      }}
    >
      <Typography color={theme.palette.green.main} variant="h5">
        {weightStatItem.timeFrame}
      </Typography>
      <Box
        sx={{
          padding: 2,
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: 10,
          bgcolor: theme.palette.background.default,
        }}
      >
        <Typography variant="h4" color="primary">
          {weightStatItem.weightChange > 0 &&
            `+${weightStatItem.weightChange} lbs.`}
          {weightStatItem.weightChange < 0 &&
            `${weightStatItem.weightChange} lbs.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsWeightsItem;
