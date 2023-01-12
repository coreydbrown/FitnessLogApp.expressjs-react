import { useGetAllWeightsQuery } from "../../../services/apiSlice";

import AddWeight from "./AddWeight";
import WeightTable from "./WeightTable";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Weight = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllWeightsQuery();

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddWeight />
        {isLoading && <CircularProgress />}
        {isSuccess && <WeightTable rows={data.weights} />}
      </Box>
    </>
  );
};

export default Weight;
