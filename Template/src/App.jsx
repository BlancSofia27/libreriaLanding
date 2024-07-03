import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Landing from "./views/Landing"
import BarberShop from "./views/BarberShop"
import Consulting from "./views/Consulting"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/BarberShop" element={<BarberShop />} />
        <Route path="/Consulting" element={<Consulting />} />
      </Routes>
    </Router>
  )
}

export default App
