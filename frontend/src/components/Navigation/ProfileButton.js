import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import styles from "./Navigation.module.css";

function ProfileButton() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<>
			<div className={styles.profile_icon} onClick={openMenu}>
				<i className="fa-light fa-user" />
			</div>
			{showMenu && (
				<div
					className={styles.profile_dropdown}
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className={styles.go_to_profile}
						onClick={() => history.push("/profile")}
					>
						My Profile
					</div>
					<div>
						<button className={styles.log_out} onClick={logout}>
							Log Out
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default ProfileButton;
