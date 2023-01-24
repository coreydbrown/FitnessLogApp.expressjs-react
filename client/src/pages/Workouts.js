import { useState } from "react";

import { useGetAllWorkoutsQuery } from "../app/services/workoutsApi";

import WorkoutsList from "../features/workouts/WorkoutsList";
import LoadingSpinner from "../components/LoadingSpinner";
import CreateWorkout from "../features/workouts/CreateWorkout";
import PageLimitSelector from "../features/workouts/PageLimitSelector";
import WorkoutsPagination from "../features/workouts/WorkoutsPagination";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Workouts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isLoading, isSuccess } = useGetAllWorkoutsQuery({
    page,
    limit,
  });

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WORKOUTS
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <CreateWorkout />
        <PageLimitSelector setLimit={setLimit} limit={limit} />
      </Box>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <WorkoutsList workouts={data ? data.workouts : []} />}
      {data && data.numOfPages > 1 && (
        <WorkoutsPagination
          numOfPages={data.numOfPages}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default Workouts;
