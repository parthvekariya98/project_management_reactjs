import React, { useState } from "react";
import "../App.css"
import MenuBar from './MenuBar';
import SideBar from './SideBar';

function Dashboard() {
    const [showPopup, setShowPopup] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDetails, setProjectDetails] = useState("");

    const handleAddBoxClick = () => {
        setShowPopup(true);
    }

    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    }

    const handleProjectDetailsChange = (event) => {
        setProjectDetails(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("New project added:", projectName, projectDetails);
        setShowPopup(false);
        setProjectName("");
        setProjectDetails("");
    }

    return (
        <div>
            <MenuBar />
            <div className="container">
                <SideBar />
                <div className="content-container">
                    <div className="add-box" onClick={handleAddBoxClick}>
                        <span className="add-text">Create New</span>
                        <span className="add-icon">+</span>
                    </div>
                    {showPopup && (
                        <div className="popup">
                            <h1>Create New Project</h1>
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor="project-name">Project Name:</label>
                                <input type="text" id="project-name" value={projectName} onChange={handleProjectNameChange} />
                                <label htmlFor="project-details">Project Details:</label>
                                <textarea id="project-details" value={projectDetails} onChange={handleProjectDetailsChange}></textarea>
                                <button type="submit">Add Project</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;