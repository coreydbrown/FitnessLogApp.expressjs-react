import ProtectedRoute from "./layout/ProtectedRoute";
import AppLayout from "./layout/AppLayout";
import Stats from "./pages/Stats";
import Workouts from "./pages/Workouts";
import Weight from "./pages/Weight";
import Notes from "./pages/Notes";
import Records from "./pages/Records";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="stats" element={<Stats />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="records" element={<Records />} />
          <Route path="notes" element={<Notes />} />
          <Route path="weight" element={<Weight />} />
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
