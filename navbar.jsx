import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar(){
    return(
        <div className="container-nav">
        <div className="navbar">
          <a href="#">DevDeakin</a>
          <input type="text" placeholder="Search..." />
          <div className="login-button">
          <Link to="/login">Login</Link>
          </div>
          <div className="post-button">
            <a href="#">Post</a>
          </div>
        </div>
      </div>
    )
}export default Navbar;