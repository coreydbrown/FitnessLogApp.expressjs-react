import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeights } from "../../../redux/weightsSlice";

import AddWeight from "./AddWeight";
import WeightTable from "./WeightTable";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

const Weight = () => {
  const dispatch = useDispatch();
  const weightData = useSelector((state) => state.weights.weights);
  const status = useSelector((state) => state.weights.statusGetAll);
  const error = useSelector((state) => state.weights.errorGetAll);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWeights());
    }
  }, [status, dispatch]);

  return (
    <>
      <Typography component="h2" variant="h4" mb={3}>
        WEIGHT
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <AddWeight />
        {status === "loading" && <CircularProgress />}
        {status === "failed" && <Typography>{error}</Typography>}
        {status === "succeeded" && <WeightTable rows={weightData} />}
      </Box>
    </>
  );
};

export default Weight;
