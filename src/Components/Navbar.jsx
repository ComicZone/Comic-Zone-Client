import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart } from "phosphor-react";
import Logo from "../Assests/images/comiczonelogo.svg";
import Badge from "./Images/Badge.png"

const Navbar = () => {
  
 return(
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="search-container">
        <input type="text" placeholder="Search comics" />
        <MagnifyingGlass size={32} className="icon" />
      </div>

      <div className="links">
        <Link to="/">
          <img src={Badge} alt="Logo" className="logo" />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
        
        </div>

  );
};

export default Navbar;
