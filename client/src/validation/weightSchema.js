import * as yup from "yup";

const weightSchema = yup.object().shape({
  weight: yup
    .number()
    .typeError("Must be a number")
    .required("Required")
    .positive("Must be a positive number"),
});

export default weightSchema;
