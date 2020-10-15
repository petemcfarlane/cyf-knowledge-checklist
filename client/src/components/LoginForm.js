import React, {useState} from 'react'

import { Link } from "react-router-dom";
export default function LoginForm() {
    const [input, setInput]= useState({
        email: "",
        password: ""
    })

   function handleChange(event){
       let updateInput = {
           ...input,
           [event.target.name]: event.target.value
       }
        console.log(updateInput)
       setInput(updateInput);
   }
   function handleSubmit(event){
    event.prevendDefault();
    setInput({
        email: "",
        password: ""
           })
    }
    return (
            <form onSubmit={handleSubmit}>
        <div>
            <h1>Welcome to our page</h1>
            <label>Email</label>
            <input type="email" placeholder="Enter email" name="email" onChange={handleChange} value={input.email} />
            <label>Password</label>
            <input type="password" placeholder="Enter email" name="password" onChange={handleChange} value={input.password} />
            <input type="submit" value="login" />
            <Link to="/signup">signup</Link>
        </div>
        </form>
    )
}
