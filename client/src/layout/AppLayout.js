import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "./nav";
import ApiAlert from "../components/ApiAlert";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const AppLayout = () => {
  const showAlert = useSelector((state) => state.alert.showAlert);

  return (
    <Box sx={{ display: "flex" }}>
      {showAlert && <ApiAlert />}
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
