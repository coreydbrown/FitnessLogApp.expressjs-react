import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user-context";
import validator from "validator";
import ColorModeToggler from "../components/ColorModeToggler";
import { Link, useNavigate } from "react-router-dom";
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
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState({ err: false, msg: "" });

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState({ err: false, msg: "" });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({ err: false, msg: "" });

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({ err: false, msg: "" });

  const [isLoading, setIsLoading] = useState(false);

  const { user, registerUser, emailAlreadyRegistered } =
    useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setFirstNameError({ err: true, msg: "Please enter your first name" });
    }
    if (lastName === "") {
      setLastNameError({ err: true, msg: "Please enter your last name" });
    }
    if (email === "") {
      setEmailError({ err: true, msg: "Please enter a valid email address" });
    }
    if (password === "") {
      setPasswordError({ err: true, msg: "Please enter a valid password" });
    }
    if (!validator.isEmail(email)) {
      setEmailError({
        err: true,
        msg: "Please enter a valid email address",
      });
      return;
    }
    if (password.length < 8 && password !== "") {
      setPasswordError({
        err: true,
        msg: "Password must contain at least 8 characters",
      });
      return;
    }
    if (password.length > 30 && password !== "") {
      setPasswordError({
        err: true,
        msg: "Password must contain 30 characters or less",
      });
      return;
    }
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== ""
    ) {
      setIsLoading(true);
      const firstNameCap =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      const lastNameCap =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
      const user = {
        firstName: firstNameCap,
        lastName: lastNameCap,
        email,
        password,
      };

      (async () => {
        const success = await registerUser(user);
        if (!success) setIsLoading(false);
      })();
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    e.target.value === ""
      ? setFirstNameError({ err: true, msg: "Please enter your first name" })
      : setFirstNameError({ err: false, msg: "" });
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    e.target.value === ""
      ? setLastNameError({ err: true, msg: "Please enter your last name" })
      : setLastNameError({ err: false, msg: "" });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    e.target.value === ""
      ? setEmailError({ err: true, msg: "Please enter a valid email address" })
      : setEmailError({ err: false, msg: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    e.target.value === ""
      ? setPasswordError({ err: true, msg: "Please enter a valid password" })
      : setPasswordError({ err: false, msg: "" });
  };

  const handleFirstNameBlur = (e) => {
    if (firstName === "")
      setFirstNameError({ err: true, msg: "Please enter your first name" });
  };

  const handleLastNameBlur = (e) => {
    if (lastName === "")
      setLastNameError({ err: true, msg: "Please enter your last name" });
  };

  const handleEmailBlur = (e) => {
    if (email === "")
      setEmailError({ err: true, msg: "Please enter a valid email address" });
  };

  const handlePasswordBlur = (e) => {
    if (password === "")
      setPasswordError({ err: true, msg: "Please enter a valid password" });
  };

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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleFirstNameChange}
                    onBlur={handleFirstNameBlur}
                    error={firstNameError.err}
                    helperText={firstNameError.msg}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={handleLastNameChange}
                    onBlur={handleLastNameBlur}
                    error={lastNameError.err}
                    helperText={lastNameError.msg}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={emailError.err || emailAlreadyRegistered}
                    helperText={
                      emailAlreadyRegistered
                        ? "This email address already has an account"
                        : emailError.msg
                    }
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    error={passwordError.err}
                    helperText={passwordError.msg}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
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
