import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MenuBar from './components/MenuBar';


function App() {
  return (
    <Router>
      <MenuBar />
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<div><h1>Welcome to my website!</h1><p>This is the content of my website.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
