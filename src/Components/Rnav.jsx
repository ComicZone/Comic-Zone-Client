import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart,BellSimpleRinging } from "phosphor-react";
import Logo from "./Images/Logo.png"
import User from "./Images/User.png"




const Rnavbar = () => {
    const isLoggedIn = props.isLoggedIn;
   
 return(
    <div className="navbar">

    <img src={Logo} alt="Logo" className="logo" />
        <div className="search-container">
        <input type="text" placeholder="Search comics" />
        <MagnifyingGlass size={32} className="icon"/>
      </div>

        <div className="links">

        <Link to="/">
        <BellSimpleRinging size={32}/>
        </Link>
        <Link to="/cart">
            <ShoppingCart size={32}/>
        </Link>
        <Link to="/profile">
        <img src={User} alt="Logo" className="logo" />
        </Link>

        
        </div>
    
    </div>
 )
};

export default Rnavbar;