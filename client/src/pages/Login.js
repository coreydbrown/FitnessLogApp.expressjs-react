import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import ColorModeToggler from "../components/ColorModeToggler";
import { Link, useNavigate } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({ err: false, msg: "" });

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState({ err: false, msg: "" });

  const [isLoading, setIsLoading] = useState(false);

  const { user, loginUser, invalidCredentials } = useContext(UserContext);

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
    if (email === "") {
      setEmailError({ err: true, msg: "Please enter a valid email address" });
    }
    if (password === "") {
      setPasswordError({ err: true, msg: "Please enter a valid password" });
    }
    if (email !== "" && password !== "") {
      setIsLoading(true);
      const user = { email, password };

      (async () => {
        const success = await loginUser(user);
        if (!success) setIsLoading(false);
      })();
    }
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                error={emailError.err || invalidCredentials}
                helperText={
                  invalidCredentials ? "Invalid credentials" : emailError.msg
                }
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                error={passwordError.err || invalidCredentials}
                helperText={
                  invalidCredentials ? "Invalid credentials" : passwordError.msg
                }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
