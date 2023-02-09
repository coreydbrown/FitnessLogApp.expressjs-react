import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import randomColorGenerator from "../../utilities/randomColorGenerator";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenter";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Sidebar = ({ handleDrawerToggle }) => {
  const user = useSelector((state) => state.auth.user);
  const userInitials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  const theme = useTheme();

  return (
    <div>
      <Toolbar />
      <List>
        <ListItem key="avatar" sx={{ justifyContent: "center" }}>
          <Avatar
            sx={{
              bgcolor: randomColorGenerator(theme),
              width: "5rem",
              height: "5rem",
              fontSize: "2.75rem",
            }}
          >
            {userInitials}
          </Avatar>
        </ListItem>

        <ListItem key="welcome-text" sx={{ justifyContent: "center", mb: 3 }}>
          <Typography
            component="h3"
            variant="h5"
            align="center"
          >{`${user.firstName} ${user.lastName}`}</Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="link1" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/stats"
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItemButton>
        </ListItem>

        <ListItem key="link2" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/workouts"
          >
            <ListItemIcon>
              <FitnessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Workouts" />
          </ListItemButton>
        </ListItem>

        <ListItem key="link3" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/weight"
          >
            <ListItemIcon>
              <MonitorWeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Weight" />
          </ListItemButton>
        </ListItem>

        <ListItem key="link4" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/notes"
          >
            <ListItemIcon>
              <StickyNote2OutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItemButton>
        </ListItem>

        <ListItem key="link5" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/records"
          >
            <ListItemIcon>
              <EmojiEventsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Records" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
