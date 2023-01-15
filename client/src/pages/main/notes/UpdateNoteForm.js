import { useDispatch } from "react-redux";
import { useUpdateNoteMutation } from "../../../app/services/notesApi";
import { useFormik } from "formik";
import noteSchema from "../../../validation/noteSchema";
import launchAlert from "../../../utilities/launchAlert";

import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const UpdateNoteForm = ({ id, title, content, category, handleClose }) => {
  const dispatch = useDispatch();

  const [updateNote, { isLoading }] = useUpdateNoteMutation();

  const formik = useFormik({
    initialValues: {
      title: title,
      content: content,
      category: category,
    },
    validationSchema: noteSchema,
    onSubmit: async (values) => {
      const { error } = await updateNote({ id, ...values });
      launchAlert(dispatch, error);
      handleClose();
    },
  });

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <DialogTitle>Update note</DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            name="title"
            label="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
            margin="normal"
          />
          <TextField
            id="content"
            name="content"
            label="Note content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
            fullWidth
            margin="normal"
            multiline
            minRows={2}
            maxRows={3}
          />

          <FormControl sx={{ mt: 1.5 }}>
            <FormLabel id="category-radio-group">Category</FormLabel>
            <RadioGroup
              aria-labelledby="category-radio-group"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Goal" control={<Radio />} label="Goal" />
              <FormControlLabel
                value="Reminder"
                control={<Radio />}
                label="Reminder"
              />
              <FormControlLabel
                value="Workout Thought"
                control={<Radio />}
                label="Workout Thought"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
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
            loading={isLoading}
            loadingPosition="end"
            variant="contained"
          >
            Update note
          </LoadingButton>
        </DialogActions>
      </Box>
    </>
  );
};

export default UpdateNoteForm;
