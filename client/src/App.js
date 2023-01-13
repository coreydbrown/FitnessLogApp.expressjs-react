import ProtectedRoute from "./layout/ProtectedRoute";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/main/Dashboard";
import Workouts from "./pages/main/Workouts";
import Weight from "./pages/main/weight";
import Notes from "./pages/main/notes";
import Records from "./pages/main/Records";
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
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="weight" element={<Weight />} />
          <Route path="notes" element={<Notes />} />
          <Route path="records" element={<Records />} />
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
