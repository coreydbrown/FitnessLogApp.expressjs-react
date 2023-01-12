import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Required"),
});

export default loginSchema;
