import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginForm from "./components/LoginForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import { Modal } from './context/Modal';
import Modal from "./components/Modal";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	// const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<div>
			<Navigation isLoaded={isLoaded} />
			<Modal />
			{isLoaded && (
				<Switch>
					<Route path="/">
						<h1>Hello</h1>
					</Route>
				</Switch>
			)}
		</div>
	);
}

export default App;
