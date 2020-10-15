import React, {useState} from 'react'
import {Jumbotron,Container, Form, Col ,Row } from 'react-bootstrap'


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
        <Jumbotron fluid>
      <Container>
     <Form onSubmit={handleSubmit}>
          <Col as={Row} sm={{ span: 5, offset: 5 }}>
            <label  size="lg" >Email</label>
            </Col>
          <Col as={Row} sm={{ span: 5, offset: 5 }}>
             <input  
             type="email" 
             placeholder="Enter email" 
             name="email" 
             onChange={handleChange} 
             value={input.email} 
             />
             </Col>
             <br />
            <Col  sm={{ span: 5, offset: 5 }}>
               <label  size="lg" as={Row} >Password</label></Col>
            <Col as={Row} sm={{ span: 5, offset: 5 }}>
               <input 
               type="password" 
               placeholder="Enter password" 
               name="password" 
               onChange={handleChange} 
               value={input.password} />
               </Col>
               <br />
            <Col as={Row} sm={{ span: 5, offset: 5 }}>
              <Link to = "/Skills">< button type="button" variant="secondary" size="lg" p-2 active >Login</button></Link>
              </Col>
              <Col as={Row} sm={{ span: 5, offset: 5 }}>
               <Link to="/signup">signup</Link> 
               </Col>
        </Form>    


</Container>
</Jumbotron>


    )
}
