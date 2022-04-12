import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from '../LoginFormModal';
import { showModal, currentModal } from "../../store/modal";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

import "./Navigation.css";

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

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
				<div onClick={displayLoginForm}>Log In</div>
			</>
		);
	}

	return (
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
				{isLoaded && sessionLinks}
			</li>
		</ul>
	);
}

export default Navigation;
