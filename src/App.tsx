import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      <Route path="/blog" element={<div>Blog Page</div>} />
      <Route path="/pricing" element={<div>Pricing Page</div>} />
      <Route
        path="/industries/technology"
        element={<div>Technology Industry</div>}
      />
      <Route
        path="/industries/healthcare"
        element={<div>Healthcare Industry</div>}
      />
      <Route path="/industries/finance" element={<div>Finance Industry</div>} />
      <Route
        path="/industries/education"
        element={<div>Education Industry</div>}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
