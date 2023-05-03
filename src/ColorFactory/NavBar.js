import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css"

function NavBar() {

    return(
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/colors/new">Add New Color</NavLink>
        </nav>
    )
}

export default NavBar;