import React from 'react';
import './MenuBar.css';




function MenuBar() {
    return (
      <div className="menu-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    );
  }
  

export default MenuBar;