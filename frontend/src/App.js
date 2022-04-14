import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { getAllSpots } from "./store/spots";

import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Modal from "./components/Modal";
import SplashPage from "./components/SplashPage";
import NewSpotForm from "./components/NewSpotForm";
import Footer from "./components/Footer";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);
	const spotsList = useSelector((state) => Object.values(state.spots));

	useEffect(() => {
		const load = async () => {
			await dispatch(sessionActions.restoreUser());
			await dispatch(getAllSpots());
			setIsLoaded(true);
		};
		load();
	}, [dispatch]);

	return (
		<div className="app_page_container">
			<Navigation sessionUser={sessionUser} isLoaded={isLoaded} />
			<Modal />
			{isLoaded && (
				<Switch>
					<Route exact path="/">
						<SplashPage sessionUser={sessionUser} />
					</Route>
					<Route exact path="/main">
						<Homepage spots={spotsList} />
					</Route>
					<Route exact path="/spots/new">
						{sessionUser ? (
							<NewSpotForm />
						) : (
							<Redirect to="/main" />
						)}
					</Route>
					<Route>
						<h1>Page Not Found</h1>
					</Route>
				</Switch>
			)}
			<Footer />
		</div>
	);
}

export default App;
