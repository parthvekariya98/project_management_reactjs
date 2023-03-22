import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import About from './components/About';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </Router>
  );
}

export default App;
