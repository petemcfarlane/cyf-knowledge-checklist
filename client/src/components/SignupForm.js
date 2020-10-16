import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Modal from "./Modal";
import "../App.css";

const SignupForm = () => {
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
  function handleChange(event) {
    let updateInput = {
      ...input,
      [event.target.name]: event.target.value,
    };
    setInput(updateInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmit(true);
    setInput({
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
  }
  return (
    <div>
      {submit ? (
        <Modal />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="sign-form">
            <label for="firstName">First Name</label>
            <input
              type="text"
              placeholder="First name"
              value={input.firstName}
              onChange={handleChange}
              name="firstName"
              required
            />
            <label for="surname">surname</label>
            <input
              type="text"
              placeholder="Surname"
              value={input.surname}
              onChange={handleChange}
              name="surname"
              required
            />
            <label for="role">Role</label>
            <input
              type="text"
              placeholder="role"
              value={input.role}
              onChange={handleChange}
              name="role"
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              name="email"
              required
            />
            <label for="password">password</label>
            <input
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              name="password"
              required
            />
            <label for="">Conform Password</label>
            <input
              type="password"
              placeholder="Conform Password"
              value={input.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              required
            />
            <label for="ClassId">Class-id</label>
            <input
              type="number"
              placeholder="Class-id"
              value={input.ClassId}
              onChange={handleChange}
              name="ClassId"
              required
            />
            <label for="githubName">Github Name</label>
            <input
              type="text"
              placeholder="Github Name"
              value={input.githubName}
              onChange={handleChange}
              name="githubName"
              required
            />
            <label for="slackHandler">Slack Handler</label>
            <input
              type="text"
              placeholder="Slack Handler"
              value={input.slackHandler}
              onChange={handleChange}
              name="slackHandler"
              required
            />
            <Link to="/modal">
              <input type="submit" value="Submit" className="submit" />
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
