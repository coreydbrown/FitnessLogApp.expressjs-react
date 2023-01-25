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
      <Box display="flex" justifyContent="center">
        <AddWeight />
      </Box>
      {isSuccess && weights.length > 0 && <WeightChart weights={weights} />}
      <Box display="flex" justifyContent="center" mt={8}>
        {isLoading && <LoadingSpinner />}
        {isSuccess && weights.length > 0 && <WeightTable rows={weights} />}
      </Box>
    </>
  );
};

export default Weight;
