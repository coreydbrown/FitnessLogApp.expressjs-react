import ActivityTrackerSVG from "../svg-components/ActivityTrackerSVG";
import ColorModeToggler from "../components/ColorModeToggler";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Landing = () => {
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <ColorModeToggler />
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
            <Typography component="h1" variant="h2" color="primary">
              Fit Crew Connect
            </Typography>
            <Typography>
              Irure laborum eu veniam nisi et ea aliquip quis est amet nulla
              adipisicing. Labore laboris dolore elit commodo culpa in elit.
              Eiusmod ullamco sunt eiusmod irure fugiat nostrud tempor irure
              culpa elit labore. Minim adipisicing nulla aute eiusmod velit
              pariatur in ipsum esse commodo anim et.
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="secondary"
              display="block"
              sx={{ mt: 2, mb: 1 }}
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
