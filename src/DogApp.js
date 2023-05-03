import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css';

import Dog from "./Dogs/Dog.js";
import DogList from "./Dogs/DogList.js";
import NavBar from "./Dogs/NavBar";

import duke from "./Dogs/images/duke.jpg";
import perry from "./Dogs/images/perry.jpg";
import tubby from "./Dogs/images/tubby.jpg";
import whiskey from "./Dogs/images/whiskey.jpg";

function App({dogs}) {

  return (
    <div className="App">
        <BrowserRouter>
        <NavBar dogs={dogs} />
        <Routes>
          <Route exact path="/" element={<Navigate to="/dogs"/>}/>
          <Route exact path="/dogs" element={<DogList dogs={dogs}/>}/>
          <Route exact path="/dogs/:name" element={<Dog dogs={dogs}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      id: 1,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      id: 2,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      id: 3,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      id: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
