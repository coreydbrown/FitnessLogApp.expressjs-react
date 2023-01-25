import WorkoutItem from "./WorkoutItem";

import Grid from "@mui/material/Grid";

const WorkoutsList = ({ workouts }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {workouts.map((workout) => (
        <Grid key={workout._id} item sx={{ width: { xs: "100%", sm: 350 } }}>
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
