import * as yup from "yup";

const workoutSchema = yup.object().shape({
  exercises: yup.array().of(
    yup.object().shape({
      exercise: yup.string().required("Required"),
      weight: yup
        .number()
        .typeError("Must be a number")
        .required("Required")
        .positive("Must be a positive number"),
      sets: yup
        .number()
        .typeError("Must be a number")
        .required("Required")
        .positive("Must be a positive number"),
      reps: yup
        .number()
        .typeError("Must be a number")
        .required("Required")
        .positive("Must be a positive number"),
    })
  ),
});

export default workoutSchema;
