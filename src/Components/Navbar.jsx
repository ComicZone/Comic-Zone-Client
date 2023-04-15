import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import Logo from "./Images/Logo.png"
import Badge from "./Images/Badge.png"



<<<<<<< HEAD
        /></button> </form> <div className="links" > <Link to="/SignUp" > <User size= {
            32
        }
=======
>>>>>>> ee3358be43bc9ad316f60aecf8eff3c3e16f2dfb

const Navbar = () => {
  
 return(
    <div className="navbar">

    <img src={Logo} alt="Logo" className="logo" />
        <div className="search-container">
        <input type="text" placeholder="Search comics" />
        <MagnifyingGlass size={32} className="icon"/>
      </div>

        <div className="links">

        <Link to="/">
        <img src={Badge} alt="Logo" className="logo" />
        </Link>
        
        </div>
    
    </div>
 )
};

export default Navbar;