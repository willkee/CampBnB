import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

import NavWidescreen from "./NavWidescreen";
import { LeftChevron } from "../../assets/icons";
function Navigation({ sessionUser, isLoaded }) {
	const location = useLocation();
	const navigate = useNavigate();
	if (location.pathname === "/") return null;

	return (
		<nav className={styles.nav_container}>
			{isLoaded && location.pathname !== "/" && (
				<div className={styles.loaded_container}>
					<div style={{ display: "flex" }}>
						<div
							className={styles.left_chevron}
							onClick={() => navigate("/")}
						>
							<LeftChevron />
						</div>
						<NavLink to="/main">
							<img
								src={`${process.env.PUBLIC_URL}/images/logo_title.png`}
								alt="CampBnB Logo"
								width="200px"
							/>
						</NavLink>
					</div>
					<NavWidescreen sessionUser={sessionUser} />
				</div>
			)}
		</nav>
	);
}

export default Navigation;
