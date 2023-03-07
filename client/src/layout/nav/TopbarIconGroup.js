import { useDispatch } from "react-redux";
import { resetCredentials } from "../../app/services/authSlice";
import ColorModeToggler from "../../components/ColorModeToggler";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const TopbarIconGroup = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(resetCredentials());
  };

  return (
    <Box display="flex" alignItems="center">
      <ColorModeToggler isInNav={true} />
      <Button onClick={handleLogout} variant="outlined" sx={{ ml: 3 }}>
        Sign out
      </Button>
    </Box>
  );
};

export default TopbarIconGroup;
