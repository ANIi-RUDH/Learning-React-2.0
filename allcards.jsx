import React from "react";
import ReactDOM from "react-dom"

export default function Card(pro){
 return (
  <div>
  <h2>{pro.nname}</h2>
    <img src={pro.photo}   />
    <p>{pro.no}</p>
    <p>{pro.mail}</p>
    </div>
 )

}