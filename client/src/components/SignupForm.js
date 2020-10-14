import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Modal from "./Modal";

/*role: Student || Mentor,
slack handler,
github name,
// first-name,
// surname ,
// email,
// password,
// confirm password
class -Id*/


const SignupForm =() =>{
	const [submit, setSubmit] = useState(false);
	const [input, setInput] = useState({
		firstName: "",
		surname: "",
		role: "",
		email: "",
		password: "",
		confirmPassword: "",
		ClassId: "",
		githubName: "",
		slackHandler: "",
	});
	function handleChange(event){

	}

	function handleSubmit (event){
		event.preventDefault();
		console.log(event);
		setSubmit(true);

	}
	return (
		<div>
			{submit

				? <Modal />
				:                <div>
					<label name="">First Name</label>
					<input type="text" placeholder="First name" value={input.firstName} onChange={handleChange} name="firstName" />
					<label name="">surname</label>
					<input type="text" placeholder="Surname" value={input.surname} onChange={handleChange} name="surname" />
					<label name="">Role</label>
					<input type="text" placeholder="role" value={input.role} onChange={handleChange} name="role" />
					<label name="email">Email</label>
					<input type="email" placeholder="Email" value={input.email} onChange={handleChange}  name="email" />
					<label name="">password</label>
					<input type="password" placeholder="Password" value={input.password} onChange={handleChange}  name="password" />
					<label name="">Conform Password</label>
					<input type="password" placeholder="Conform Password" value={input.confirmPassword} onChange={handleChange}  name="confirmPassword" />
					<label name="">Class-id</label>
					<input type="text" placeholder="Class-id" value={input.ClassId} onChange={handleChange}  name="ClassId" />
					<label name="">Github Name</label>
					<input type="text" placeholder="Github Name" value={input.githubName} onChange={handleChange}  name="githubName" />
					<label name="">Slack Handler</label>
					<input type="text" placeholder="Slack Handler" value={input.slackHandler} onChange={handleChange} name="slackHandler" />
					<input type="submit" onClick={handleSubmit} value="Submit" />

				</div>}
		</div>);

};


export default  SignupForm;