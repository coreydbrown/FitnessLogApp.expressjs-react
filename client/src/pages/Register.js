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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (e.target.value == "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (e.target.value == "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

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

  return (
    <Container maxWidth="xs">
      <Box
        height="100Vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card component="main" sx={{ minWidth: 300, textAlign: "center" }}>
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
