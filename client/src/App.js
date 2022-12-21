import Landing from "./pages/Landing";
import Nav from "./Nav";
import Main from "./Main";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Main />
    </Box>
  );
}

export default App;
