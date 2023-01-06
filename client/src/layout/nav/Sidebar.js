import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const userInitials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  const theme = useTheme();

  return (
    <div>
      <Toolbar />
      <List>
        <ListItem key="avatar" sx={{ justifyContent: "center" }}>
          <Avatar
            sx={{
              bgcolor: theme.palette.secondary.main,
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
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link2" disablePadding>
          <ListItemButton component={Link} to="/workouts">
            <ListItemIcon>
              <FitnessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Workouts" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link3" disablePadding>
          <ListItemButton component={Link} to="/weight">
            <ListItemIcon>
              <MonitorWeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Weight" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link4" disablePadding>
          <ListItemButton component={Link} to="/records">
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
