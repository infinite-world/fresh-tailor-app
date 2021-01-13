import React from "react";
import "./homenavbar.css";
import { MDBIcon } from "mdbreact";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-sm" id="back-color-navbar">
        <Link to="/">
          <a class="navbar-brand" href="#">
            <strong id="tailor-logo-text">
              <MDBIcon icon="cut" />
              TailorApp
            </strong>
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-list-2">
          <ul class="navbar-nav">
            <li class="nav-item active border border-top-0 border-left-0 border-right-0">
              <NavLink to="/login">
                <a
                  class="nav-link text-white font-italic font-weight-bold shadow-shape"
                  href="#"
                >
                  About Us
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
