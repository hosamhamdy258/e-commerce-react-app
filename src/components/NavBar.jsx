import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { loginUser, logoutUser } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  // console.log(state.products);

  const state = useSelector((state) => state.authSlice);
  const state2 = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();
  const myinfo = {
    email: "hosam@gmail.com",
    password: "pass",
  };
  let cartCount = 0;
  state2.cart.forEach((element) => {
    cartCount += element.count;
  });
  ////////////////////
  const login_handler = () => {
    dispatch(loginUser(myinfo));
  };
  const logout_handler = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              {/* <img width="200" src="/assist/images/logo3.png" alt="#" /> */}
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
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog_list.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
