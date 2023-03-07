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
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
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
        <ListItem key="stats" disablePadding>
          <ListItemButton
            onClick={handleDrawerToggle}
            component={Link}
            to="/stats"
          >
            <ListItemIcon>
              <InsightsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItemButton>
        </ListItem>

        <ListItem key="workouts" disablePadding>
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

        <ListItem key="records" disablePadding>
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

        <ListItem key="notes" disablePadding>
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

        <ListItem key="weight" disablePadding>
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
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
