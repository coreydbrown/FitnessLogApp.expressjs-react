import WeightChart from "../weight/WeightChart";
import StatsWorkoutsBox from "./StatsWorkoutsBox";
import StatsWeightsBox from "./StatsWeightsBox";
import StatsRecordBox from "./StatsRecordBox";

import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";

const StatsGrid = ({ stats, weights }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <StatsWorkoutsBox
          statCategory="#"
          statName="# of workouts completed within the last:"
          statTimeFrame="week"
          statValue={stats.numWorkoutsLastWeek}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <StatsWorkoutsBox
          statCategory="#"
          statName="# of workouts completed within the last:"
          statTimeFrame="month"
          statValue={stats.numWorkoutsLastMonth}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <StatsWorkoutsBox
          statCategory="%"
          statName="% of days you've worked out within the last:"
          statTimeFrame="week"
          statValue={stats.workoutPercentageLastWeek}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <StatsWorkoutsBox
          statCategory="%"
          statName="% of days you've worked out within the last:"
          statTimeFrame="month"
          statValue={stats.workoutPercentageLastMonth}
        />
      </Grid>

      <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
        <Typography component="h3" variant="h6">
          Weight Chart
        </Typography>
        <WeightChart weights={weights} />
      </Grid>

      <Grid item xs={12} lg={4}>
        <StatsWeightsBox
          weightChangeLastWeek={stats.weightChangeLastWeek}
          weightChangeLastMonth={stats.weightChangeLastMonth}
          weightChangeLast3Months={stats.weightChangeLast3Months}
          weightChangeLastYear={stats.weightChangeLastYear}
        />
      </Grid>

      <Grid item xs={12}>
        <StatsRecordBox mostRecentRecord={stats.mostRecentRecord} />
      </Grid>
    </Grid>
  );
};

export default StatsGrid;
