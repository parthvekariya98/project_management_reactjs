import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <Router>
      <MenuBar />
      <div className="container">
        <SideBar />
        <div className="content-container">
          <div className="add-box">
          
            <span className="add-text">Create New</span>
            <span className="add-icon">+</span>
          </div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
