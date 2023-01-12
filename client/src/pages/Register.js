import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user-context";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import registerSchema from "../validation/registerSchema";

import ColorModeToggler from "../components/ColorModeToggler";
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

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, registerUser } = useContext(UserContext);

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      const firstNameCap =
        values.firstName.charAt(0).toUpperCase() +
        values.firstName.slice(1).toLowerCase();
      const lastNameCap =
        values.lastName.charAt(0).toUpperCase() +
        values.lastName.slice(1).toLowerCase();

      const success = await registerUser({
        firstName: firstNameCap,
        lastName: lastNameCap,
        email: values.email,
        password: values.password,
      });
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
                    error={formik.touched.firstName && formik.errors.firstName}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                        ? formik.errors.firstName
                        : null
                    }
                    fullWidth
                    margin="normal"
                    autoFocus
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
                    error={formik.touched.lastName && formik.errors.lastName}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                        ? formik.errors.lastName
                        : null
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
                    error={formik.touched.email && formik.errors.email}
                    helperText={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : null
                    }
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
                    error={formik.touched.password && formik.errors.password}
                    helperText={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : null
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
                Sign Up
              </LoadingButton>
              <Typography>
                Already have an account?{" "}
                <LinkMUI component={Link} to="/login">
                  Sign in
                </LinkMUI>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Register;
