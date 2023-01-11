import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeight } from "../../../redux/weightsSlice";
import { resetStatusAdd } from "../../../redux/weightsSlice";
import validator from "validator";

import CircularProgressButton from "../../../components/CircularProgressButton";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const AddWeight = () => {
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();
  const status = useSelector((state) => state.weights.statusAdd);
  const error = useSelector((state) => state.weights.errorAdd);

  const handleSubmitWeight = (e) => {
    e.preventDefault();
    if (!weight || !validator.isNumeric(weight)) {
      console.log("error blank");
      return;
    }
    dispatch(addWeight({ weight })).then(() => {
      setTimeout(() => {
        dispatch(resetStatusAdd());
      }, "5000");
    });
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitWeight}
      display="flex"
      alignItems="center"
      mb={3}
    >
      <Typography component="h3" display="inline" mr={1}>
        Add your weight for today
      </Typography>
      <TextField
        label="Weight"
        id="weight"
        onChange={handleWeightChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: "120px", mr: "0.2rem" }}
      />
      <CircularProgressButton status={status} error={error} />
    </Box>
  );
};

export default AddWeight;
