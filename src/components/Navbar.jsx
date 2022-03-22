import React from "react";
import logo from "./logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" height="50px" width="50px" />
          <h3 id="bgwhite">CBIT IETE Student Forum</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" id="bgwhite">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="bgwhite">
                Student Members
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="bgwhite">
                Executive Members 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="bgwhite">
                Events
              </a>
            </li>
            <li className="nav-item" style={{ color: "white" }}>
              <i className="fa fa-search"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
