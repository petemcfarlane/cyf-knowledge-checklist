import React from 'react';
import fakeData from '../fakeData.json';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


export default function Html() {
 console.log(fakeData[0].html)
    return(
        <div>
          <h2>I am HTML</h2> 
          {fakeData[0].html.map(( element, index)=>{
          return(
          <h3 key={index}>{element}</h3>
          )  
          })}
        </div>
    )
}
