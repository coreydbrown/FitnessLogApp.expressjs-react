import { useContext, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ColorModeToggler = () => {
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
      position="absolute"
      top="16px"
      right={{ xs: "16px", sm: "24px", md: "24px", lg: "24px", xl: "24px" }}
    >
      <ToggleButtonGroup
        value={currentColorMode}
        exclusive
        onChange={handleColorModeChange}
        aria-label="color mode"
      >
        <ToggleButton value="light" aria-label="light mode">
          Light
          <LightModeIcon sx={{ ml: 1, color: "yellow" }} />
        </ToggleButton>
        <ToggleButton value="dark" aria-label="dark mode">
          Dark
          <DarkModeIcon
            sx={{
              ml: 1,
              color: theme.palette.mode == "light" ? "black" : "white",
            }}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ColorModeToggler;
