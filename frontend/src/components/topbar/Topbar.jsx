import React from "react";
import './topbar.css'
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import TaskIcon from '@mui/icons-material/Task';


const Topbar = () => {
    return (
        <div className="topbar border-bottom">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        <TaskIcon />
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneOutlinedIcon />
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
                                    <TaskOutlinedIcon />
                                    <span className="px-2">Tasks</span>
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <NotificationsActiveOutlinedIcon />
                                    <span className="px-2">Reminders</span>
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <TranslateOutlinedIcon />
                                    <span className="px-2">Language: English</span>
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <ModeNightOutlinedIcon />
                                    <span className="px-2">Enable dark theme</span>
                                </Link>
                                <Link to="/" className="dropdown-item">
                                    <LogoutIcon />
                                    <span className="px-2">Sign Out</span>
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
