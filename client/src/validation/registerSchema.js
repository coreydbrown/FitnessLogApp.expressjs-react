import * as yup from "yup";

const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  lastName: yup
    .string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters long")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

export default registerSchema;
