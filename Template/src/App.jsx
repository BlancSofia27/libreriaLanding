import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './views/Landing';
import BarberShop from './views/BarberShop';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path='/barberShop' element={<BarberShop/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

