import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aftercare from './pages/Aftercare';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Store from './pages/Store';
import Tattoos from './pages/Tattoos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
