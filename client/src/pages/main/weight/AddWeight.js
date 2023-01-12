import { useState } from "react";
import { useAddWeightMutation } from "../../../services/apiSlice";
import { useFormik } from "formik";
import weightSchema from "../../../validation/weightSchema";

import CircularProgressButton from "../../../components/CircularProgressButton";
import Alert from "../../../components/Alert";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const AddWeight = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");

  const [addWeight, { isLoading, error }] = useAddWeightMutation();

  const formik = useFormik({
    initialValues: {
      weight: "",
    },
    validationSchema: weightSchema,
    onSubmit: async (values) => {
      const { error } = await addWeight(values);
      const severity = error ? "error" : "success";
      setAlertSeverity(severity);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, "5000");
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      alignItems="center"
      mb={3}
    >
      {showAlert && <Alert severity={alertSeverity} error={error} />}

      <Typography component="h3" display="inline" mr={1}>
        Add your weight for today
      </Typography>

      <TextField
        id="weight"
        name="weight"
        label="Weight"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        vale={formik.values.weight}
        error={formik.touched.weight && formik.errors.weight}
        helperText={
          formik.touched.weight && formik.errors.weight
            ? formik.errors.weight
            : null
        }
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
