import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";

import { showModal, currentModal } from "../../store/modal";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

import styles from "./Navigation.module.css";

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

	return (
		<nav className={styles.nav_container}>
			{isLoaded && location.pathname !== "/" && (
				<div className={styles.loaded_container}>
					<img
						src={`${process.env.PUBLIC_URL}/images/logo_dark.png`}
						alt="CampBnB Logo"
						width="200px"
					/>
					<div>
						<NavLink exact to="/main">
							<i className="fa-light fa-campground"></i>
							<span>Explore</span>
						</NavLink>
						<NavLink exact to="/spots/new">
							<i className="fa-solid fa-location-plus"></i>
							<span>Add New Spot</span>
						</NavLink>
						{sessionUser ? (
							<ProfileButton user={sessionUser} />
						) : (
							<>
								<div onClick={displaySignupForm}>Sign Up</div>
								<div onClick={displayLoginForm}>
									<i className="fa-light fa-right-to-bracket"></i>
									Log In
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navigation;
