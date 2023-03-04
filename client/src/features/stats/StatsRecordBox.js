import { formatDateMedium } from "../../utilities/formatDate";
import { useTheme } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StatsRecordBox = ({ mostRecentRecord }) => {
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
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h5" variant="h6">
            Your most recent personal record:
          </Typography>
          <Box
            sx={{
              // border: `2px solid ${theme.palette.purple.main}`,
              // borderRadius: 5,
              // padding: 2,
              color: theme.palette.primary.main,
              mt: 1,
              // textAlign: "center",
            }}
          >
            <Typography variant="h5">
              {`${mostRecentRecord.exercise} | ${mostRecentRecord.weight} lbs. | ${mostRecentRecord.sets} sets x ${mostRecentRecord.reps} reps`}
            </Typography>
            <Typography variant="h5" fontStyle="italic">
              {formatDateMedium(mostRecentRecord.date)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsRecordBox;
