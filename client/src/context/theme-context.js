import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  red,
  pink,
  deepPurple,
  blue,
  indigo,
  cyan,
  teal,
  green,
  yellow,
  amber,
  deepOrange,
  grey,
  blueGrey,
} from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#0000aa",
          },
          secondary: {
            main: "#D2042D",
          },
          background: {
            paper: grey[200],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#64b5f6",
          },
          secondary: {
            main: "#ff7e82",
          },
          background: {
            paper: grey[900],
          },
        }),
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
