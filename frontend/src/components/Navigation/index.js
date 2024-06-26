import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { LeftChevron } from "../../assets/icons";

import Menu from "./Menu";

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
					<Menu user={sessionUser} />
				</div>
			)}
		</nav>
	);
}

export default Navigation;
