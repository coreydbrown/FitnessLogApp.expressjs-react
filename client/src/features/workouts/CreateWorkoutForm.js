import { Fragment } from "react";
// import { useDispatch } from "react-redux";
// import { useCreateNoteMutation } from "../../app/services/notesApi";
import { Formik, Form, Field, FieldArray } from "formik";
// import noteSchema from "../../validation/noteSchema";
// import launchAlert from "../../utilities/launchAlert";

import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateWorkoutForm = ({ handleClose }) => {
  //   const dispatch = useDispatch();

  //   const [createNote, { isLoading }] = useCreateNoteMutation();

  //   const formik = useFormik({
  //     initialValues: {
  //       exercises: [
  //         {
  //           exercise: "",
  //           weight: "",
  //           sets: "",
  //         },
  //       ],
  //     },
  //     validationSchema: noteSchema,
  //     onSubmit: async (values) => {
  //       const { error } = await createNote(values);
  //       launchAlert(dispatch, error);
  //       handleClose();
  //     },
  //     onSubmit: (values) => console.log(values),
  //   });

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <DialogTitle>Add a new workout</DialogTitle>
        <DialogContent>
          {formik.values.exercises.map((exerciseObj, index) => (
            <Fragment key={`exercise index ${index}`}>
              <TextField
                id={`exercises[${index}].exercise`}
                name={`exercises[${index}].exercise`}
                label="Exercise"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.exercises[index].exercise}
                // error={formik.touched.title && Boolean(formik.errors.title)}
                // helperText={formik.touched.title && formik.errors.title}
                fullWidth
                margin="normal"
              />
              <TextField
                id={`exercises[${index}].weight`}
                name={`exercises[${index}].weight`}
                label="Weight"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.exercises[index].weight}
                // error={formik.touched.title && Boolean(formik.errors.title)}
                // helperText={formik.touched.title && formik.errors.title}
                fullWidth
                margin="normal"
              />
              <TextField
                id={`exercises[${index}].sets`}
                name={`exercises[${index}].sets`}
                label="Sets"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={formik.values.exercises[index].sets}
                // error={formik.touched.title && Boolean(formik.errors.title)}
                // helperText={formik.touched.title && formik.errors.title}
                fullWidth
                margin="normal"
              />
            </Fragment>
          ))}

          {/* <TextField
            id=""
            name="title"
            label="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
            margin="normal"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            endIcon={<CancelIcon />}
          >
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            endIcon={<AddCircleIcon />}
            // loading={isLoading}
            loading={false}
            loadingPosition="end"
            variant="contained"
          >
            Add note
          </LoadingButton>
        </DialogActions>
      </Box>
    </>
  );
};

export default CreateWorkoutForm;
