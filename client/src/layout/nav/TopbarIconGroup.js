import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../app/services/authSlice";
import ColorModeToggler from "../../components/ColorModeToggler";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const TopbarIconGroup = () => {
  const dispatch = useDispatch();

  //for profile menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    dispatch(resetCredentials());
  };

  return (
    <Box display="flex" alignItems="center">
      <ColorModeToggler isInNav={true} />
      <IconButton aria-label="settings" sx={{ marginLeft: 1.5 }}>
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PersonOutlineOutlinedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={(handleClose, handleLogout)}>Sign out</MenuItem>
      </Menu>
    </Box>
  );
};

export default TopbarIconGroup;
