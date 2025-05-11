import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import Housing from "./pages/dashboard/housing/Housing";
import Locations from "./pages/dashboard/locations/Locations";
import { Toaster } from "@/components/ui/sonner"


import Id from "./pages/dashboard/housing/Id";
import Onboarding from "./pages/dashboard/onboarding/onboarding";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="housing" element={<Housing />} />
          <Route path="/dashboard/housing/:id" element={<Id />} />
          <Route path="locations" element={<Locations/>} />
          <Route path="community" element={<Dashboard />} />
          <Route path="messages" element={<Dashboard />} />
          <Route path="notifications" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
