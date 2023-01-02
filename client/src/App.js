import AppLayout from "./components/layout/AppLayout";
import Stats from "./pages/main/Stats";
import Workouts from "./pages/main/Workouts";
import Crews from "./pages/main/Crews";
import Leaderboard from "./pages/main/Leaderboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Stats />} />
          <Route path="stats" element={<Stats />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="crews" element={<Crews />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
