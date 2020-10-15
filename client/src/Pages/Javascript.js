import React from 'react'
import fakeData from '../fakeData.json';
export default function Javascript() {
    return(
        <div>
          <h2>Javascript</h2> 
          <ul>
          {fakeData[2].javascript.map(( element, index)=>{
          return(
          <li key={index}>{element}</li>
          )  
          })}
          </ul>
        </div>
    )
}
