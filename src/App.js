import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen"; // Ensure the file path is correct
import NextPage from "./NextPage"; // Ensure the file path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;


