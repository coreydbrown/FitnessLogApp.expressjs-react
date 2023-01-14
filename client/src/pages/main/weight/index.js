import { useGetAllWeightsQuery } from "../../../services/apiSlice";

import AddWeight from "./AddWeight";
import WeightTable from "./WeightTable";
import LoadingSpinner from "../../../components/LoadingSpinner";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Weight = () => {
  const { data: weights, isLoading, isSuccess } = useGetAllWeightsQuery();

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
    </>
  );
};

export default Weight;
