import React from 'react'
import fakeData from '../fakeData.json';
export default function () {
  return(
    <div>
      <h2>CSS</h2> 
      <ul>
      {fakeData[1].css.map(( element, index)=>{
      return(
      <li key={index}>{element}</li>
      )  
      })}
      </ul>
    </div>
)
}
