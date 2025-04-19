import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/industries/technology" element={<div>Technology Industry</div>} />
        <Route path="/industries/healthcare" element={<div>Healthcare Industry</div>} />
        <Route path="/industries/finance" element={<div>Finance Industry</div>} />
        <Route path="/industries/education" element={<div>Education Industry</div>} />
        
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
      </Routes>
    </Router>
  )
}
