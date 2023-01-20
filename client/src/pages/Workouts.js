import { useGetAllWorkoutsQuery } from "../app/services/workoutsApi";

import WorkoutsList from "../features/workouts/WorkoutsList";
import LoadingSpinner from "../components/LoadingSpinner";

import Typography from "@mui/material/Typography";

const Workouts = () => {
  const {
    data: workouts = [],
    isLoading,
    isSuccess,
  } = useGetAllWorkoutsQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WORKOUTS
      </Typography>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <WorkoutsList workouts={workouts} />}
    </>
  );
};

export default Workouts;
