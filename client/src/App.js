import React, { useEffect, useState } from "react";

import "./App.css";
import { getMessage } from "./service";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Skills from "./Pages/Skills";
//I'm making a change
export function App() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		getMessage().then((message) => setMessage(message));
	}, []);

	return (
		<BrowserRouter>
		<Switch>
		<main role="main">
			<div>
			{/* <SignupForm /> */}
			<Route exact path="/" component={LoginForm} />
			<Route path="/signup" component={SignupForm} />
				{/* <LoginForm /> */}
				<Route path="/skills" component={Skills} />
			</div>
		</main>
		</Switch>
		</BrowserRouter>
	);
}

export default App;
