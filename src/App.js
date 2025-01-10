import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen"; // Splash screen component
import Login from "./New1"; // Login component from New1.js
import Signup from "./Signup"; // Signup (create profile) component
import ProfilePage from "./ProfilePage"; // Profile page component

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
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
