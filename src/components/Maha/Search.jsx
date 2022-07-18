import React from 'react'
import logo from './logox.png'
import { Link } from 'react-router-dom';
import './main.css';


const Search = () => {
  const Search =()=>{
    window.addEventListener('scroll' ,function(){
      const search = document.querySelector('.search')
    })
  }
  return (
    <>
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img src={logo} alt=""/>
        </div>
        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder='Search for Product ..'/>
          <span>All Categories</span>
        </div>
        <div className="icon f_flex width">
            <span className="fa fa-user icon-circle"></span>
        <div className="cart">
          <Link to="/cart">
            <i className='fa fa-shopping-cart icon-circle'></i>
            <span>0</span>
          </Link>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search