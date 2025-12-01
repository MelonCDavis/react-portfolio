import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Appointments from "./pages/Appointments.jsx";
import Aftercare from "./pages/Aftercare.jsx";
import Tattoos from "./pages/Tattoos.jsx";
import Store from "./pages/Store.jsx";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/appointments" element={<Appointments />} />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="/store" element={<Store />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
