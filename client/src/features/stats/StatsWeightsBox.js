import { Typography, useTheme } from "@mui/material";

import StatsWeightsItem from "./StatsWeightsItem";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const StatsWeightsBox = ({
  weightChangeLastWeek,
  weightChangeLastMonth,
  weightChangeLast3Months,
  weightChangeLastYear,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: 532,
        backgroundImage: "none",
        pt: 3,
        border:
          theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
      }}
    >
      <CardContent>
        <Typography component="h5" variant="h6">
          Weight change over past:
        </Typography>
        <Box sx={{ pl: 3, pr: 3 }}>
          {[
            { timeFrame: "week", weightChange: weightChangeLastWeek },
            { timeFrame: "month", weightChange: weightChangeLastMonth },
            { timeFrame: "3 months", weightChange: weightChangeLast3Months },
            { timeFrame: "year", weightChange: weightChangeLastYear },
          ].map((item) => (
            <StatsWeightsItem key={item.timeFrame} weightStatItem={item} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsWeightsBox;
