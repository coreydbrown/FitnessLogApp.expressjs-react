import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../app/services/authApi";
import { useLoginDemoMutation } from "../../app/services/authApi";
import { setCredentials } from "../../app/services/authSlice";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import registerSchema from "../../validation/registerSchema";
import launchAlert from "../../utilities/launchAlert";
import ApiAlert from "../../components/ApiAlert";
import ColorModeToggler from "../../components/ColorModeToggler";

import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const [loginDemo, { isLoading: isLoadingDemo }] = useLoginDemoMutation();

  const showAlert = useSelector((state) => state.alert.showAlert);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const firstNameCap =
        values.firstName.charAt(0).toUpperCase() +
        values.firstName.slice(1).toLowerCase();
      const lastNameCap =
        values.lastName.charAt(0).toUpperCase() +
        values.lastName.slice(1).toLowerCase();
      const userData = {
        firstName: firstNameCap,
        lastName: lastNameCap,
        email: values.email,
        password: values.password,
      };

      const res = await register(userData);
      const error = res.error;
      const data = res.data;
      launchAlert(dispatch, error);
      if (data) dispatch(setCredentials(data));
    },
  });

  const loginDemoUser = async () => {
    const res = await loginDemo();
    const error = res.error;
    const data = res.data;
    launchAlert(dispatch, error);
    if (data) dispatch(setCredentials(data));
  };

  return (
    <>
      {showAlert && <ApiAlert />}
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <ColorModeToggler isInNav={false} />
        <Box
          height="100Vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            component="main"
            sx={{
              minWidth: 275,
              maxWidth: 350,
              textAlign: "center",
              backgroundImage: "none",
            }}
          >
            <CardContent>
              <Typography component="h2" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email Address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <LoadingButton
                  type="submit"
                  endIcon={<AppRegistrationIcon />}
                  loading={isLoading}
                  loadingPosition="end"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign up
                </LoadingButton>
                <Typography>
                  Already have an account?{" "}
                  <LinkMUI component={Link} to="/login">
                    Sign in
                  </LinkMUI>
                </Typography>
              </Box>
              <LoadingButton
                loading={isLoadingDemo}
                onClick={loginDemoUser}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 3, pt: 1, pb: 1, fontSize: "large" }}
              >
                Demo App
              </LoadingButton>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default RegisterForm;
