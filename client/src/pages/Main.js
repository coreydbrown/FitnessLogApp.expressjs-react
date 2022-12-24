import Nav from "../components/Nav";
import Content from "../components/Content";
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
