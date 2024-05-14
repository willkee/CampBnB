import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

import { ArrowLeft } from "../../assets/icons";
import NavWidescreen from "./NavWidescreen";

function Navigation({ sessionUser, isLoaded }) {
	const location = useLocation();

	if (location.pathname === "/") return null;

	return (
		<>
			<nav className={styles.nav_container}>
				{isLoaded && location.pathname !== "/" && (
					<div className={styles.loaded_container}>
						<NavLink to="/main">
							<img
								src={`${process.env.PUBLIC_URL}/images/logo_title.png`}
								alt="CampBnB Logo"
								width="200px"
							/>
						</NavLink>
						<NavWidescreen sessionUser={sessionUser} />
					</div>
				)}
			</nav>
			<div className={styles.c1}>
				<NavLink className={styles.return_to_splash} to="/">
					<ArrowLeft /> Trying to return to the splash page? Click
					here.
				</NavLink>
			</div>
		</>
	);
}

export default Navigation;
