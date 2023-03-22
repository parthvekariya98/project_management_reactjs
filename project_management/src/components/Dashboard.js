import React from "react";
import "../App.css"
import MenuBar from './MenuBar';
import SideBar from './SideBar';

function Dashboard() {
    return (
        <div>
            <MenuBar />
            <div className="container">
                <SideBar />
                <div className="content-container">
                    <div className="add-box">
                        <span className="add-text">Create New</span>
                        <span className="add-icon">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;