import React from "react";
import { Link } from "react-router-dom";

import "./DogList.css"

function DogList({dogs}) {
    const dogLi = dogs.map( d => <li key={d.id}><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></li>)
    return (
        <div className="DogList">
            <h1>Hello! Here are all of our cute dogs!</h1>
            <ul>
                {dogLi}
            </ul>
        </div>
    )
}

export default DogList;