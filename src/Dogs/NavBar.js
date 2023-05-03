import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css"

function NavBar({dogs}) {
    const dogLinks = dogs.map( d => <NavLink key={d.id} to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</NavLink>);
    return (
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            {dogLinks}
        </nav>
    )
}

export default NavBar;