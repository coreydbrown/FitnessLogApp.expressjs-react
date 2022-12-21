import Nav from "../Nav";
import Content from "../Content";
import Box from "@mui/material/Box";

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Content />
    </Box>
  );
};

export default Main;
