import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Landing = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "100Vh",
          maxWidth: "md",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography component="h2" variant="h2" color="primary">
            Fit Crew Connect
          </Typography>
        </Box>
        <Box>
          <Typography>
            Irure laborum eu veniam nisi et ea aliquip quis est amet nulla
            adipisicing. Labore laboris dolore elit commodo culpa in elit.
            Eiusmod ullamco sunt eiusmod irure fugiat nostrud tempor irure culpa
            elit labore. Minim adipisicing nulla aute eiusmod velit pariatur in
            ipsum esse commodo anim et.
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{ mt: 2 }}>
            Login/Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
