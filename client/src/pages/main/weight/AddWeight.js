import { useDispatch, useSelector } from "react-redux";
import { useAddWeightMutation } from "../../../services/apiSlice";
import launchAlert from "../../../utilities/launchAlert";
import { useFormik } from "formik";
import weightSchema from "../../../validation/weightSchema";

import CircularProgressButton from "../../../components/CircularProgressButton";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const AddWeight = () => {
  const dispatch = useDispatch();

  const [addWeight, { isLoading }] = useAddWeightMutation();

  const formik = useFormik({
    initialValues: {
      weight: "",
    },
    validationSchema: weightSchema,
    onSubmit: async (values) => {
      const { error } = await addWeight(values);
      launchAlert(dispatch, error);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      alignItems="center"
      mb={3}
      noValidate
    >
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
        error={formik.touched.weight && Boolean(formik.errors.weight)}
        helperText={formik.touched.weight && formik.errors.weight}
        InputProps={{
          endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ width: "120px", mr: "0.2rem" }}
      />

      <CircularProgressButton isLoading={isLoading} />
    </Box>
  );
};

export default AddWeight;
