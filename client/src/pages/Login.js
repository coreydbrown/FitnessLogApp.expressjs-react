import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import loginSchema from "../validation/login";

import ColorModeToggler from "../components/ColorModeToggler";
import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, loginUser } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const success = await loginUser(values);
      if (!success) setIsLoading(false);
    },
  });

  return (
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
          sx={{ minWidth: 275, maxWidth: 350, textAlign: "center" }}
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
                error={formik.touched.email && formik.errors.email}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                fullWidth
                margin="normal"
                autoFocus
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
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
                Sign In
              </LoadingButton>
              <Typography>
                Don't have an account?{" "}
                <LinkMUI component={Link} to="/register">
                  Sign up
                </LinkMUI>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
