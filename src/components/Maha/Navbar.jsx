import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './main.css';



const Navbar = () => {
  const [ShowInMobile ,setShowInMobile]=useState(false);
  return (
    <>
      <header className="myFilter">
        <div className="container d_flex">
          <div className="categories d_flex">
          <span className="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-right"></i>
          </h4>
          </div>

          <div className="navLink">
            <ul className={"link f_flex capitalize" }>
              <li>
                <Link to="/Products/Smartphones">Smartphones</Link>
              </li>
              <li>
                <Link to="/Products/Laptops">Laptops</Link>
              </li>
              <li>
                <Link to="/Products/Fragrances">Fragrances</Link>
              </li>
              <li>
                <Link to="/Products/Skincare">Skincare</Link>
              </li> 
              <li>
                <Link to="/Products/Groceries">Groceries</Link>
              </li>
              <li>
                <Link to="/Products/Home-Decoration">Home Decoration</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
