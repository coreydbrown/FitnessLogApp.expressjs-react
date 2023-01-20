import {
  red,
  pink,
  deepPurple,
  indigo,
  cyan,
  teal,
  green,
  yellow,
  amber,
  deepOrange,
  grey,
} from "@mui/material/colors";

const lightModeColors = {
  primary: {
    main: "#0000aa",
  },
  secondary: {
    main: "#D2042D",
  },
  background: {
    paper: grey[100],
  },

  red: {
    main: red[500],
    dark: red[600],
  },
  pink: {
    main: pink[500],
    dark: pink[600],
  },
  purple: {
    main: deepPurple[500],
    dark: deepPurple[600],
  },
  indigo: {
    main: indigo[500],
    dark: indigo[600],
  },
  cyan: {
    main: cyan[700],
    dark: cyan[800],
  },
  teal: {
    main: teal[500],
    dark: teal[600],
  },
  green: {
    main: green[600],
    dark: green[700],
  },
  yellow: {
    main: yellow[600],
    dark: yellow[700],
  },
  amber: {
    main: amber[600],
    dark: amber[700],
  },
  orange: {
    main: deepOrange[500],
    dark: deepOrange[600],
  },
};

const darkModeColors = {
  primary: {
    main: "#64b5f6",
  },
  secondary: {
    main: "#ff7e82",
  },
  background: {
    paper: "rgb(0,20,40)",
    default: "rgb(0,10,20)",
  },

  red: {
    main: red[200],
    dark: red[400],
  },
  pink: {
    main: pink[200],
    dark: pink[400],
  },
  purple: {
    main: deepPurple[200],
    dark: deepPurple[400],
  },
  indigo: {
    main: indigo[200],
    dark: indigo[400],
  },
  cyan: {
    main: cyan[200],
    dark: cyan[400],
  },
  teal: {
    main: teal[200],
    dark: teal[400],
  },
  green: {
    main: green[200],
    dark: green[400],
  },
  yellow: {
    main: yellow[200],
    dark: yellow[400],
  },
  amber: {
    main: amber[200],
    dark: amber[400],
  },
  orange: {
    main: deepOrange[200],
    dark: deepOrange[400],
  },
};

export { lightModeColors, darkModeColors };
