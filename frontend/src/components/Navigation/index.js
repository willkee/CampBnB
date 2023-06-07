import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";

import { showModal, currentModal } from "../../store/modal";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import SearchInput from "../Search/Input";

import styles from "./Navigation.module.css";

import {
	Campground,
	MagnifyingGlassLocation,
	LocationPlus,
	FaceSmilePlus,
	ArrowRightToBracket,
	ArrowLeft,
} from "../../assets/icons";

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

	const displaySearchInput = () => {
		dispatch(currentModal(SearchInput));
		dispatch(showModal());
	};

	return (
		<>
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
							<NavLink
								className={styles.explore_button}
								exact
								to="/main"
							>
								<Campground />
								<span>Explore</span>
							</NavLink>
							<div
								className={styles.search}
								onClick={displaySearchInput}
							>
								<MagnifyingGlassLocation />
								Search
							</div>
							{sessionUser ? (
								<>
									<NavLink
										className={styles.add_new}
										exact
										to="/spots/new"
									>
										<LocationPlus />
										<span>Add New Spot</span>
									</NavLink>
									<ProfileButton />
								</>
							) : (
								<>
									<div
										className={styles.sign_up}
										onClick={displaySignupForm}
									>
										<FaceSmilePlus />
										Sign Up
									</div>
									<div
										className={styles.log_in}
										onClick={displayLoginForm}
									>
										<ArrowRightToBracket />
										Log In
									</div>
								</>
							)}
						</div>
					</div>
				)}
			</nav>
			<div className={styles.c1}>
				<NavLink className={styles.return_to_splash} exact to="/">
					<ArrowLeft /> Trying to return to the splash page? Click
					here.
				</NavLink>
			</div>
		</>
	);
}

export default Navigation;
