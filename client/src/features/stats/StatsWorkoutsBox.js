import { Typography, useTheme } from "@mui/material";

import PercentageCircle from "./PercentageCirle";
import NumberSquare from "./NumberSquare";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const StatsWorkoutsBox = ({
  statCategory,
  statName,
  statTimeFrame,
  statValue,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        border:
          theme.palette.mode === "dark"
            ? `1px solid ${theme.palette.divider}`
            : "none",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography>{statName}</Typography>
            <Typography color="secondary" variant="h6">
              {statTimeFrame}
            </Typography>
          </Box>
          <Box>
            {statCategory === "%" && (
              <PercentageCircle percentage={statValue} />
            )}
            {statCategory === "#" && <NumberSquare number={statValue} />}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsWorkoutsBox;
