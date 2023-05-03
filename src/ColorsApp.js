import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css';

import NavBar from "./ColorFactory/NavBar.js";
import ColorFactory from "./ColorFactory/ColorFactory.js";
import NewColorForm from "./ColorFactory/NewColorForm.js";
import ColorPage from "./ColorFactory/ColorPage.js";
import PageNotFound from "./ColorFactory/PageNotFound.js";

function ColorsApp() {

    const [colors, setColors] = useState([{colorName: "Red", colorCode: "#FF0000"}]);

    const addNewColor = (newColor) => {
        setColors( c => [...c, newColor])
    }

    return (
        <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/colors"/>}/>
          <Route exact path="/colors/:code" element={<ColorPage colors={colors}/>}/>
          <Route exact path="/colors/new" element={<NewColorForm add={addNewColor}/>}/>
          <Route exact path="/colors" element={<ColorFactory colors={colors}/>}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default ColorsApp;