import { Formik, Form, FieldArray, getIn } from "formik";

import workoutSchema from "../../validation/workoutSchema";

import TextField from "@mui/material/TextField";

const CreateWorkoutFormNew = () => (
  <>
    <Formik
      initialValues={{
        exercises: [
          {
            exercise: "",
            weight: "",
            sets: "",
          },
        ],
      }}
      validationSchema={workoutSchema}
      onSubmit={(values) => console.log(values)}
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

                    return (
                      <div key={index}>
                        <TextField
                          id={exerciseName}
                          name={exerciseName}
                          label="Exercise"
                          value={exercise.exercise}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(
                            touchedExerciseName && errorExerciseName
                          )}
                          helperText={touchedExerciseName && errorExerciseName}
                          fullWidth
                          margin="normal"
                        />
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
                        />
                        <TextField
                          id={sets}
                          name={sets}
                          label="Sets"
                          value={exercise.sets}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touchedSets && errorSets)}
                          helperText={touchedSets && errorSets}
                          margin="normal"
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        exercise: "",
                        weight: "",
                        sets: "",
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  </>
);

export default CreateWorkoutFormNew;
