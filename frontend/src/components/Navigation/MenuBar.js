import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";
import { User } from "../../assets/icons";
function MenuBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
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

	const logout = () => {
		setShowMenu(false);
		dispatch(sessionActions.logout());
	};

	const goToProfile = () => {
		navigate("/profile");
		setShowMenu(false);
	};

	return (
		<>
			<div className={styles.profile_icon} onClick={openMenu}>
				<User />
			</div>
			{showMenu && (
				<div
					className={styles.profile_dropdown}
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className={
							location.pathname === "/profile"
								? styles.disabled_link
								: styles.go_to_profile
						}
						onClick={goToProfile}
					>
						{location.pathname === "/profile"
							? "Welcome to your Profile!"
							: "My Profile"}
					</div>
					<div>
						<button
							className={styles.log_out}
							type="button"
							onClick={logout}
						>
							Log Out
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default MenuBar;
