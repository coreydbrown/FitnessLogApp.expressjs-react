import { useContext, useState } from "react";
import { ColorModeContext } from "../context/theme-context";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ColorModeToggler = ({ isInNav }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [currentColorMode, setCurrentColorMode] = useState(theme.palette.mode);

  const handleColorModeChange = (e, newColorMode) => {
    if (newColorMode !== null) {
      colorMode.toggleColorMode();
      setCurrentColorMode(newColorMode);
    }
  };

  return (
    <Box
      position={isInNav ? "static" : "absolute"}
      top={{ xs: "16px", sm: "24px", md: "24px", lg: "24px", xl: "24px" }}
      right={{ xs: "16px", sm: "24px", md: "24px", lg: "24px", xl: "24px" }}
    >
      <ToggleButtonGroup
        value={currentColorMode}
        exclusive
        onChange={handleColorModeChange}
        size="small"
        aria-label="color mode"
      >
        <ToggleButton value="light" aria-label="light mode">
          <LightModeOutlinedIcon sx={{ color: "yellow" }} />
        </ToggleButton>
        <ToggleButton value="dark" aria-label="dark mode">
          <DarkModeOutlinedIcon sx={{ color: theme.palette.default }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ColorModeToggler;
