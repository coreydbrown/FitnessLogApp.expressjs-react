import { useGetAllWeightsQuery } from "../app/services/weightsApi";

import AddWeight from "../features/weight/AddWeight";
import WeightTable from "../features/weight/WeightTable";
import LoadingSpinner from "../components/LoadingSpinner";
import WeightChart from "../features/weight/WeightChart";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Weight = () => {
  const { data: weights = [], isLoading, isSuccess } = useGetAllWeightsQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddWeight />
        {isLoading && <LoadingSpinner />}
        {isSuccess && <WeightTable rows={weights} />}
      </Box>
      {isSuccess && <WeightChart weights={weights} />}
    </>
  );
};

export default Weight;
