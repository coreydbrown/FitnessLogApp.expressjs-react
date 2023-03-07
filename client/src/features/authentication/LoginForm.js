import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../app/services/authApi";
import { useLoginDemoMutation } from "../../app/services/authApi";
import { setCredentials } from "../../app/services/authSlice";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import loginSchema from "../../validation/loginSchema";
import launchAlert from "../../utilities/launchAlert";

import ApiAlert from "../../components/ApiAlert";
import ColorModeToggler from "../../components/ColorModeToggler";

import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const [loginDemo, { isLoading: isLoadingDemo }] = useLoginDemoMutation();

  const showAlert = useSelector((state) => state.alert.showAlert);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await login(values);
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
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  fullWidth
                  margin="normal"
                />
                <LoadingButton
                  type="submit"
                  endIcon={<LoginIcon />}
                  loading={isLoading}
                  loadingPosition="end"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign in
                </LoadingButton>
                <Typography>
                  Don't have an account?{" "}
                  <LinkMUI component={Link} to="/register">
                    Sign up
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

export default LoginForm;
