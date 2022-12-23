import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blue, indigo, red } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
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
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#64b5f6",
          },
          secondary: {
            main: "#ff7e82",
          },
        }),
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeContext({ children }) {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
