import React from 'react';
import './MenuBar.css';
import profileIcon from '../assets/profile-icon.png';




function MenuBar() {
    return (
      <div className="menu-bar">
        <h1>Project Management</h1>
        
        <div className="profile-menu">
      
        <img src={profileIcon} alt="Profile Icon" />
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Log out</a></li>
        </ul>
      </div>
      </div>
    );
  }
  

export default MenuBar;