import ColorModeToggler from "../components/ColorModeToggler";
import { useState } from "react";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }
    if (firstName == "") {
      setFirstNameError(true);
    }
    if (lastName == "") {
      setLastNameError(true);
    }
    if (email != "" && password != "" && firstName != "" && lastName != "") {
      console.log("submit");
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    e.target.value === "" ? setFirstNameError(true) : setFirstNameError(false);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    e.target.value === "" ? setLastNameError(true) : setLastNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    e.target.value === "" ? setEmailError(true) : setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    e.target.value === "" ? setPasswordError(true) : setPasswordError(false);
  };

  const handleFirstNameBlur = (e) => {
    if (firstName === "") setFirstNameError(true);
  };

  const handleLastNameBlur = (e) => {
    if (lastName == "") setLastNameError(true);
  };

  const handleEmailBlur = (e) => {
    if (email === "") setEmailError(true);
  };

  const handlePasswordBlur = (e) => {
    if (password == "") setPasswordError(true);
  };

  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <ColorModeToggler />
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
                    error={firstNameError}
                    helperText={
                      firstNameError ? "Please enter your first name" : ""
                    }
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
                    error={lastNameError}
                    helperText={
                      lastNameError ? "Please enter your last name" : ""
                    }
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
                    error={emailError}
                    helperText={
                      emailError ? "Please enter a valid email address" : ""
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
                    error={passwordError}
                    helperText={
                      passwordError ? "Please enter a valid password" : ""
                    }
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
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
