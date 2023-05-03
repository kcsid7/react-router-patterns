import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./NewColorForm.css"

function NewColorForm({add}) {

    const [data, updateData] = useState({colorName: "", colorCode: ""});
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        add(data);
        navigate("/");
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        updateData( d => ({
            ...d,
            [e.target.name]: e.target.value
        }))
    }
    
    return(
        <div className="NewColorForm">
            <h1>New Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="Form-Field">
                    <label htmlFor="colorCode">Color Picker</label>
                    <input type="color" name="colorCode" id="colorCode" onChange={handleChange} />
                </div>
                <div className="Form-Field">
                    <label htmlFor="colorName">Color Name</label>
                    <input type="text" name="colorName" id="colorName" onChange={handleChange} value={data.colorName}/>
                </div>
                <button disabled={(data.colorName === "" || data.colorCode === "")}>Add Color</button>
            </form>
        </div>
    )
}

export default NewColorForm;