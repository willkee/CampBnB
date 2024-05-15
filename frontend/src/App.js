import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { getAllSpots } from "./store/spots";

import * as sessionActions from "./store/session/thunks";

import { selectSpotsList } from "./selectors/spots";

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Modal from "./components/Modal";
import SplashPage from "./components/SplashPage";
import NewSpotForm from "./components/NewSpotForm";
import SingleSpot from "./components/SingleSpot";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import SearchResults from "./components/Search/Results";

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);
	// const spotsList = useSelector((state) => Object.values(state.spots));
	const spotsList = useSelector(selectSpotsList);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() =>
			dispatch(getAllSpots()).then(() => setIsLoaded(true))
		);
	}, [dispatch]);

	return (
		<div className="app_page_container">
			<Navigation sessionUser={sessionUser} isLoaded={isLoaded} />
			<Modal />
			{isLoaded && (
				<Routes>
					<Route
						path="/"
						element={<SplashPage sessionUser={sessionUser} />}
					/>
					<Route
						path="/main"
						element={<Homepage spots={spotsList} />}
					/>
					<Route
						path="/spots/new"
						element={
							sessionUser ? (
								<NewSpotForm />
							) : (
								<Navigate to="/main" />
							)
						}
					/>
					<Route path="/spots/:id" element={<SingleSpot />} />
					<Route
						path="/profile"
						element={
							sessionUser ? (
								<ProfilePage />
							) : (
								<Navigate to="/main" />
							)
						}
					/>
					<Route path="/search/:query" element={<SearchResults />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			)}
			<Footer />
		</div>
	);
}

export default App;
