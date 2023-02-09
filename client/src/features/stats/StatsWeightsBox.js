import { useTheme } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
        height: 500,
        backgroundImage: "none",
        border:
          theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
      }}
    >
      <CardContent>
        <div>{weightChangeLastWeek}</div>
        <div>{weightChangeLastMonth}</div>
        <div>{weightChangeLast3Months}</div>
        <div>{weightChangeLastYear}</div>
      </CardContent>
    </Card>
  );
};

export default StatsWeightsBox;
