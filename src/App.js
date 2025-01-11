import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Login from "./New1";
import Signup from "./Signup";
import Profile from "./Profile";
import Homepage from "./Homepage";
import TechnicalSession from "./TechnicalSession"; // Import TechnicalSession
import NonTechnicalSession from "./NonTechnicalSession"; // Import NonTechnicalSession

function App() {
  return (
    <Router>
      <Routes>
        {/* Splash Screen */}
        <Route path="/" element={<SplashScreen />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup (Create Profile) Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* Homepage */}
        <Route path="/homepage" element={<Homepage />} />

        {/* Technical Session Page */}
        <Route path="/technical" element={<TechnicalSession />} />

        {/* Non-Technical Session Page */}
        <Route path="/non-technical" element={<NonTechnicalSession />} />
      </Routes>
    </Router>
  );
}

export default App;



