import ActivityTrackerSVG from "../components/svg-components/ActivityTrackerSVG";
import ColorModeToggler from "../components/ColorModeToggler";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

const Landing = () => {
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <ColorModeToggler isInNav={false} />
      <Box
        display="flex"
        height="100Vh"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          height="100%"
          width={{
            xs: "100%",
            sm: "49%",
            md: "49%",
            lg: "49%",
            xl: "49%",
          }}
          display="flex"
          alignItems="center"
        >
          <Box>
            <Typography
              component="h1"
              variant="h2"
              color="primary"
              marginBottom={1}
            >
              Fitness Log App
            </Typography>
            <Typography component="h2" variant="h5" marginBottom={1}>
              Created by Corey D. Brown
              <Tooltip
                title="Visit project repository on GitHub"
                placement="top"
              >
                <IconButton
                  href="https://github.com/coreydbrown/fitness-log-app"
                  target="_blank"
                  aria-label="github"
                  size="large"
                  sx={{ ml: 1 }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Typography>
            <Typography>
              Our app is designed to help you stay on track with your fitness
              journey. Use our user-friendly interface to document your daily
              workouts, record your body weight measurements, and gain insights
              into your fitness habits with our statistics and interactive
              graphs. Your personal records in different exercises are
              automatically generated, so you will always know when you've hit a
              new milestone. You can also record notes from your workouts,
              reminders for the future, and goals to strive for. When it comes
              to staying focused and motivated, we have your back!
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="secondary"
              display="block"
              sx={{ mt: 3, mb: 1 }}
            >
              Sign in
            </Button>
            <Typography>
              Don't have an account?{" "}
              <LinkMUI component={Link} to="/register" color="secondary">
                Sign up
              </LinkMUI>
            </Typography>
          </Box>
        </Box>

        <Box
          height="100%"
          width="49%"
          display={{
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          }}
          alignItems="center"
        >
          <ActivityTrackerSVG />
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
