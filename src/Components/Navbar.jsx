import React from "react";
import "./Navbar.css";

import {
    Link
}

from "react-router-dom";

import {
    MagnifyingGlass,
    ShoppingCart
}

from "phosphor-react";

import {
    User
}

from "phosphor-react";


const Navbar=()=> {
    return(<div className="navbar " > <form className="search-container" > <input type="text" placeholder="Search" /> <button type="submit" ><MagnifyingGlass size= {
            32
        }

        /></button> </form> <div className="links" > <Link to="/SignUp" > <User size= {
            32
        }

        /> </Link> <Link to="/cart" > <ShoppingCart size= {
            32
        }

        /> </Link> </div> </div>)
}

;

export default Navbar;