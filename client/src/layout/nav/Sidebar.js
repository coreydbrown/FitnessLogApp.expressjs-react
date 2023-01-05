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
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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
          <ListItemButton component={Link} to="/stats">
            <ListItemIcon>
              <StackedLineChartIcon />
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link2" disablePadding>
          <ListItemButton component={Link} to="/workouts">
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="My Workouts" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link3" disablePadding>
          <ListItemButton component={Link} to="/crews">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="My Crews" />
          </ListItemButton>
        </ListItem>
        <ListItem key="link4" disablePadding>
          <ListItemButton component={Link} to="/leaderboard">
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
