import React from 'react';
import { Link } from "react-router-dom";
import LeftSideBar from "../Views/LeftSideBar"


const src = '/src';

const Header = () => {
    return (
      <React.Fragment>
      <div className="container-fluid">
          <nav className="nav-header">
            <Link to="/" ><img src={`${src}/Images/logo.jpg`} width="12%" height="auto" alt=""></img></Link>
            <div className="nav-content">
                 <ul className="nav-ul">
                    <li className="nav-it"><Link to="/" className="nav-li" name="home">Home</Link></li>
                    <li className="nav-it"><Link to="/about" className="nav-li" name="about">About Us</Link></li>
                    <li className="nav-it"><Link to="/products" className="nav-li" name="products">Products & Prices</Link></li>
                    <li><Link to="/signup" className="signup-link">Sign up</Link></li>
                    <li><Link to="/signin" className="signin-link">Sign in</Link></li>
                </ul>
            </div>
          </nav>
      </div>
      <LeftSideBar />
    </React.Fragment>
    )
  } 


export default Header

