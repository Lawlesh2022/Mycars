import React from "react";
import Cars from "../cars.json";
import "./Mycars.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image from "./Image";
import { useState } from "react";

const Mycars = () => {
    const[id, setId] = useState("")
    var input;
    const handleInput = (e)=>{
        input = e.traget.value;        
    }
    const handleSubmit = (e)=>{
        e.preventdefault();
        setId(input);
    }
  return (
    <div>
      <h1>My Cars</h1>
      <div className="container">
        <table>
          <thead className="thead">
            <tr>
            <th>ID</th>
            <th>MODEL NAME</th>
            <th>BODY TYPE</th>
            <th>MODEL TYPE</th>
            <th>IMAGE URL</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {Cars.map((car) => {
              return (                
                  <tr key = {car.id}>
                    <td>{car.id}</td>
                    <td>{car.modelName}</td>
                    <td>{car.bodyType}</td>
                    <td>{car.modelType}</td>
                    <td>{car.imageUrl}</td>
                  </tr>              
              );             
            })}
          </tbody>
        </table>         
      </div>
      <input type = "text" className = "input" onChange = {handleInput}/>  
      <button className = "btn" onClick = {handleSubmit}>Submit</button>            
      <BrowserRouter>
        <Routes>
            <Route exact path = '/' element = {<Image/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Mycars;
