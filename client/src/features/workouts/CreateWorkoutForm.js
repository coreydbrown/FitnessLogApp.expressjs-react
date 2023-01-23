import { useDispatch } from "react-redux";
import { useAddWorkoutMutation } from "../../app/services/workoutsApi";
import { Formik, Form, FieldArray, getIn } from "formik";
import workoutSchema from "../../validation/workoutSchema";
import launchAlert from "../../utilities/launchAlert";
import { useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CreateWorkoutForm = ({ handleClose }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const [addWorkout, { isLoading }] = useAddWorkoutMutation();

  const emptyObj = {
    exercise: "",
    weight: "",
    sets: "",
    reps: "",
  };

  return (
    <>
      <DialogTitle>Add a new workout</DialogTitle>
      <Formik
        initialValues={{
          exercises: [emptyObj],
        }}
        validationSchema={workoutSchema}
        onSubmit={async (values) => {
          const { error } = await addWorkout(values);
          launchAlert(dispatch, error);
          handleClose();
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form>
            <FieldArray
              name="exercises"
              render={(arrayHelpers) => (
                <div>
                  {values.exercises && values.exercises.length > 0 ? (
                    values.exercises.map((exercise, index) => {
                      const exerciseName = `exercises[${index}].exercise`;
                      const touchedExerciseName = getIn(touched, exerciseName);
                      const errorExerciseName = getIn(errors, exerciseName);

                      const weight = `exercises[${index}].weight`;
                      const touchedWeight = getIn(touched, weight);
                      const errorWeight = getIn(errors, weight);

                      const sets = `exercises[${index}].sets`;
                      const touchedSets = getIn(touched, sets);
                      const errorSets = getIn(errors, sets);

                      const reps = `exercises[${index}].reps`;
                      const touchedReps = getIn(touched, reps);
                      const errorReps = getIn(errors, reps);

                      return (
                        <Box key={index} bgcolor="green">
                          <DialogContent>
                            <Grid
                              container
                              spacing={2}
                              borderRadius={1}
                              sx={{
                                backgroundColor:
                                  theme.palette.background.default,
                                backgroundImage: "none",
                                pb: 2,
                                pr: 2,
                              }}
                            >
                              <Grid item xs={7} lg={5}>
                                <TextField
                                  id={exerciseName}
                                  name={exerciseName}
                                  label="Exercise Name"
                                  value={exercise.exercise}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(
                                    touchedExerciseName && errorExerciseName
                                  )}
                                  helperText={
                                    touchedExerciseName && errorExerciseName
                                  }
                                  fullWidth
                                  margin="normal"
                                  sx={{ mt: 0, mb: 0 }}
                                />
                              </Grid>
                              <Grid item xs={5} lg={2}>
                                <TextField
                                  id={weight}
                                  name={weight}
                                  label="Weight"
                                  value={exercise.weight}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(touchedWeight && errorWeight)}
                                  helperText={touchedWeight && errorWeight}
                                  fullWidth
                                  margin="normal"
                                  sx={{ mt: 0, mb: 0 }}
                                />
                              </Grid>
                              <Grid item xs={5} lg={2}>
                                <TextField
                                  id={sets}
                                  name={sets}
                                  label="Sets"
                                  value={exercise.sets}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(touchedSets && errorSets)}
                                  helperText={touchedSets && errorSets}
                                  fullWidth
                                  margin="normal"
                                  sx={{ mt: 0, mb: 0 }}
                                />
                              </Grid>
                              <Grid item xs={5} lg={2}>
                                <TextField
                                  id={reps}
                                  name={reps}
                                  label="Reps"
                                  value={exercise.reps}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={Boolean(touchedReps && errorReps)}
                                  helperText={touchedReps && errorReps}
                                  fullWidth
                                  margin="normal"
                                  sx={{ mt: 0, mb: 0 }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={2}
                                lg={1}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <IconButton
                                  onClick={() => arrayHelpers.remove(index)}
                                  aria-label="remove"
                                >
                                  <RemoveCircleOutlineIcon fontSize="large" />
                                </IconButton>
                              </Grid>
                              {index === values.exercises.length - 1 && (
                                <Grid item xs={12}>
                                  <Button
                                    onClick={() => arrayHelpers.push(emptyObj)}
                                    fullWidth
                                  >
                                    Add another exercise
                                  </Button>
                                </Grid>
                              )}
                            </Grid>
                          </DialogContent>
                        </Box>
                      );
                    })
                  ) : (
                    <Box display="flex" justifyContent="center">
                      <Button
                        onClick={() => arrayHelpers.push(emptyObj)}
                        variant="outlined"
                        sx={{ ml: 1, mb: 2 }}
                      >
                        Add a workout
                      </Button>
                    </Box>
                  )}
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
                      loading={false}
                      loadingPosition="end"
                      variant="contained"
                    >
                      Add note
                    </LoadingButton>
                  </DialogActions>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateWorkoutForm;
