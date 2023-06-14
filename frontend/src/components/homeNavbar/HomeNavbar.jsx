import React from 'react';
import './homeNavbar.css'

const HomeNavbar = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand px-5" href="/">taskManager</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto justify-content-end px-5">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
