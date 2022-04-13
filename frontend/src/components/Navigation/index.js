import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";

import { showModal, currentModal } from "../../store/modal";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

import "./Navigation.css";

function Navigation({ sessionUser, isLoaded }) {
	const dispatch = useDispatch();
	const location = useLocation();

	const displaySignupForm = () => {
		dispatch(currentModal(SignUpForm));
		dispatch(showModal());
	};

	const displayLoginForm = () => {
		dispatch(currentModal(LoginForm));
		dispatch(showModal());
	};

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<div onClick={displaySignupForm}>Sign Up</div>
				<div onClick={displayLoginForm}>
					<i className="fa-light fa-right-to-bracket"></i>Log In
				</div>
			</>
		);
	}

	return (
		<nav>
			{location.pathname !== "/" && (
				<>
					<NavLink exact to="/">
						<img
							src="images/logo_dark.png"
							alt="CampBnB Logo"
							width="200px"
						/>
					</NavLink>
					{isLoaded && sessionLinks}
				</>
			)}
		</nav>
	);
}

export default Navigation;
