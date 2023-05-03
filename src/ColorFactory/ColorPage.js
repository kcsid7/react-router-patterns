import React from "react";
import { useParams } from "react-router-dom";

function ColorPage({colors}) {

    const {code} = useParams();
    const cCode = `#${code}`;

    const curColor = colors.find( c => c.colorCode === cCode);

    if (!curColor) {
        return (
            <h1>Please enter a valid color code. Try FF0000</h1>
        )
    }

    return(
        <div className="ColorPage" style={{width: "100vw", height: "100vh", backgroundColor: curColor.colorCode}}>
            <h1>Hello World!</h1>
        </div>
    )
}

export default ColorPage;