import * as yup from "yup";

const noteSchema = yup.object().shape({
  title: yup.string().required("Required"),
  content: yup.string().required("Required"),
  category: yup
    .string()
    .required("Required")
    .oneOf(["Goal", "Reminder", "Workout Thought", "Other"]),
});

export default noteSchema;
