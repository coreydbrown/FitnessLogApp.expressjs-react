import { useState } from "react";
import { useAddWeightMutation } from "../../../services/apiSlice";
import validator from "validator";
import CircularProgressButton from "../../../components/CircularProgressButton";
import Alert from "../../../components/Alert";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const AddWeight = () => {
  const [addWeight, { isLoading, error }] = useAddWeightMutation();

  const [weight, setWeight] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSubmitWeight = (e) => {
    e.preventDefault();
    if (!weight || !validator.isNumeric(weight)) {
      console.log("error - please enter values blank");
      return;
    }
    const addWeightWithAlert = async () => {
      const { error } = await addWeight({ weight });
      const severity = error ? "error" : "success";
      setAlertSeverity(severity);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, "5000");
    };
    addWeightWithAlert();
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
      {showAlert && <Alert severity={alertSeverity} error={error} />}

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

      <CircularProgressButton
        isLoading={isLoading}
        isSuccess={showAlert && alertSeverity === "success"}
        isError={showAlert && alertSeverity === "error"}
      />
    </Box>
  );
};

export default AddWeight;
