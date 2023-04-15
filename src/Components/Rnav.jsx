import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MagnifyingGlass, ShoppingCart,BellSimpleRinging, House, User}   from "phosphor-react";
import Logo from "./Images/Logo.png";
import User1 from "./Images/User1.png";
import Badge from "./Images/Badge.png"





const Rnavbar = () => {
    
   const [isLoggedIn, setLogin] = useState(true);

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

        <Link to="/">
        <BellSimpleRinging size={32}/>
        </Link>
        <Link to="/cart">
            <ShoppingCart size={32}/>
        </Link>
        <Link to="/profile">
        <img src={User1} alt="Logo" className="logo" />
        </Link>
        <Link to="/profile">
        <House size={32} />
        </Link>
        <Link to="/profile">
        <User size={32} />
        </Link>

        
        </div>
    
    </div>
 )
};

export default Rnavbar;