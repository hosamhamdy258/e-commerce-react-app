import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/Home#top">
              <span className="logo">EASY SHOP</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/Home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Products">Products</NavLink>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link" to="/About us">About us</NavLink> */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home"><i className="fa-solid fa-cart-plus"></i></NavLink>
                  
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
