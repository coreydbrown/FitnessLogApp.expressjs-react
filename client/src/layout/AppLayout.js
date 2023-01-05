import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default AppLayout;
