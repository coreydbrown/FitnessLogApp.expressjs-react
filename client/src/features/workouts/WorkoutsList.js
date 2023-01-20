import WorkoutItem from "./WorkoutItem";

import Grid from "@mui/material/Grid";

const WorkoutsList = ({ workouts }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {workouts.map((workout) => (
        <Grid key={workout._id} item>
          <WorkoutItem
            exercises={workout.exercises}
            createdAt={workout.createdAt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkoutsList;
