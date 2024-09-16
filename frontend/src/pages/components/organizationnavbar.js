import React, { useState } from 'react';
import './usernavbar.css';

const OrganizationNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#" className="navbar-item">Jobs</a>
                <a href="#" className="navbar-item">Message</a>
                <a href="#" className="navbar-item">Community</a>
            </div>
            <div className="navbar-right">
                <div className="profile-dropdown">
                    <img 
                        src="Images/user-icon-svgrepo-com (1).svg" 
                        alt="Logo" 
                        className="profile-logo" 
                    />
                    <div className="dropdown-content">
                        <div className="Profdrop">
                            <img 
                                src="Images/user-icon-svgrepo-com (1).svg" 
                                className="profa" 
                                alt="logo" 
                            />
                            <a href="#">Profile</a>
                        </div>
                        <div className="Profdrop">
                            <img 
                                src="Images/settings-2-svgrepo-com.svg" 
                                className="profa" 
                                alt="logo" 
                            />
                            <a href="#">Settings</a>
                        </div>
                        <div className="Profdrop">
                            <img 
                                src="Images/log-out-1-svgrepo-com.svg" 
                                className="profa" 
                                alt="logo" 
                            />
                            <a href="#">Logout</a>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default OrganizationNavbar;
