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
					<NavLink exact to="/main">
						<img
							src={`${process.env.PUBLIC_URL}/images/logo_title.png`}
							alt="CampBnB Logo"
							width="200px"
						/>
					</NavLink>
					<div className={styles.right}>
						<NavLink exact to="/main">
							<i className="fa-light fa-campground"></i>
							<span>Explore</span>
						</NavLink>
						{sessionUser ? (
							<>
								<NavLink exact to="/spots/new">
									<i className="fa-solid fa-location-plus"></i>
									<span>Add New Spot</span>
								</NavLink>
								<ProfileButton user={sessionUser} />
							</>
						) : (
							<>
								<div
									className={styles.sign_up}
									onClick={displaySignupForm}
								>
									Sign Up
								</div>
								<div
									className={styles.log_in}
									onClick={displayLoginForm}
								>
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
