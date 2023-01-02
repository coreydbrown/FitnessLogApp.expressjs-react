import NavDrawer from "../components/NavDrawer";
import Content from "../components/Content";
import Box from "@mui/material/Box";

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavDrawer />
      <Content />
    </Box>
  );
};

export default Main;
