import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights } from "../../../redux/weightsSlice";

import AddWeight from "./AddWeight";
import WeightTable from "./WeightTable";
import WeightAlerts from "./WeightAlerts";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Weight = () => {
  const dispatch = useDispatch();
  const weightData = useSelector((state) => state.weights.weights);
  const statusGetAll = useSelector((state) => state.weights.statusGetAll);

  useEffect(() => {
    if (statusGetAll === "idle") {
      dispatch(fetchWeights());
    }
  }, [statusGetAll, dispatch]);

  return (
    <>
      <WeightAlerts />
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddWeight />
        {statusGetAll === "loading" && <CircularProgress />}
        {statusGetAll === "succeeded" && <WeightTable rows={weightData} />}
      </Box>
    </>
  );
};

export default Weight;
