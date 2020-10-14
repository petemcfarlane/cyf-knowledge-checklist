import React, {useState} from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom";
export default function LoginForm() {
    const [input, setInput]= useState({
        email: "",
        password: ""
    })

   function handleChange(event){
       event.prevendDefault();
       setInput(event.target.value);
   }

    return (

        <div>
            <h1>Welcome to our page</h1>
            <label>Email</label>
            <input type="email" placeholder="Enter email" name="email" onChange={handleChange} value={input.email} />
            <label>Password</label>
            <input type="password" placeholder="Enter email" name="password" onChange={handleChange} value={input.password} />
            <Link to = "/Skills">< button type="button" class="btn btn-secondary">Login</button></Link>
            <Link to="/signup">signup</Link>
        </div>
    )
}
