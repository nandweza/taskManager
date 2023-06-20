import React from "react";
import './topbar.css'
import { Link } from "react-router-dom";
import AddAlertIcon from '@mui/icons-material/AddAlert';


const Topbar = () => {
    return (
        <div className="topbar border-bottom">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        taskManager
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <AddAlertIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <Link to='#' className="nav-link dropdown-toggle" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                            </Link>
                            <div class="dropdown-menu custom-dropdown" aria-labelledby="userDropdown">
                                <Link to='#' className="dropdown-item">
                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                                    <span class="user-profile-text fw-bold px-2">
                                        Ana Kate
                                    </span>
                                </Link>
                                <Link to="#" class="dropdown-item p-2 pt-2 text-center user-profile-text">
                                    Manage your Account
                                </Link>
                                <div class="dropdown-divider"></div>
                                <Link to="#" class="dropdown-item user-profile-text">
                                    Tasks
                                </Link>
                                <Link to="#" class="dropdown-item user-profile-text">
                                    Edit Task
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    Reminders
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    Languages
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    Enable dark theme
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    Sign Out
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Topbar;
