import { useState } from "react";
import { createWeight } from "../../../services/weights";
import validator from "validator";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const AddWeight = () => {
  const [weight, setWeight] = useState("");

  const handleSubmitWeight = (e) => {
    e.preventDefault();
    if (!weight || !validator.isNumeric(weight)) {
      console.log("error blank");
      return;
    }
    createWeight({ weight });
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
        sx={{ width: "120px" }}
      />
      <IconButton type="submit" aria-label="add weight">
        <AddCircleOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default AddWeight;
