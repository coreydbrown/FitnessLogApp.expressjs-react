import ColorModeToggler from "./ColorModeToggler";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Nav = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="h2">
            Fit Crew Connect
          </Typography>
          <ColorModeToggler />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key="link1" disablePadding>
            <ListItemButton>
              <ListItemText primary="Link 1" />
            </ListItemButton>
          </ListItem>
          <ListItem key="link2" disablePadding>
            <ListItemButton>
              <ListItemText primary="Link 2" />
            </ListItemButton>
          </ListItem>
          <ListItem key="link3" disablePadding>
            <ListItemButton>
              <ListItemText primary="Link 3" />
            </ListItemButton>
          </ListItem>
          <ListItem key="link4" disablePadding>
            <ListItemButton>
              <ListItemText primary="Link 4" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Nav;
