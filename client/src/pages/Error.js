import page_not_found_svg from "../images/page_not_found.svg";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Error = () => {
  return (
    <Container maxWidth="xl">
      <Box
        height="100Vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
        >
          <img src={page_not_found_svg} alt="" style={{ width: "100%" }} />
        </Box>
        <Box mt={2} textAlign="center">
          <Typography component="h2" variant="h5">
            Page Not Found
          </Typography>
          <Typography>
            Sorry, we can't seem to find the page you're looking for.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            display="block"
            sx={{ mt: 2 }}
          >
            Return Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;
