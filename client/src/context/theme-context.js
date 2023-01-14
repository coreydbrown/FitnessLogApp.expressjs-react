import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightModeColors, darkModeColors } from "./themeColors";

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    h1: { fontFamily: `"Alexandria", sans-serif` },
    h2: { fontFamily: `"Alexandria", sans-serif` },
    h3: { fontFamily: `"Alexandria", sans-serif` },
    h4: { fontFamily: `"Alexandria", sans-serif` },
    h5: { fontFamily: `"Alexandria", sans-serif` },
    h6: { fontFamily: `"Alexandria", sans-serif` },
  },
  palette: {
    mode,
    ...(mode === "light" ? lightModeColors : darkModeColors),
  },
});

const currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  localStorage.setItem("theme", "dark");
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ThemeContext({ children }) {
  const [mode, setMode] = React.useState(localStorage.getItem("theme"));
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        const theme = localStorage.getItem("theme");
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
