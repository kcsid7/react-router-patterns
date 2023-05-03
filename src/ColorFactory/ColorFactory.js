import React from "react";
import {v4 as uuid} from "uuid";
import { Link } from "react-router-dom";

import "./ColorFactory.css";


function ColorFactory({colors}) {
    const colorsList = colors.map( c => ( 
            <li className="ColorFactory-List-Item" key={uuid()} >
                <Link to={`/colors/${c.colorCode.replace("#", "")}`}>
                    {c.colorName}
                </Link>
                <span style={{height: "10px", backgroundColor: c.colorCode}}></span>
            </li>
    ));
    return (
        <div className="ColorFactory">
            <h1>Welcome to the Color Factory</h1>
            <ul className="ColorFactory-List">
                {colorsList}
            </ul>
        </div>
    )
}

export default ColorFactory;