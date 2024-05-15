import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import * as sessionActions from "../../store/session/thunks";

import styles from "./SplashPage.module.css";
const SplashSignup = ({ active }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const demoLogin = async (e) => {
		await dispatch(sessionActions.login("demo@user.io", "password"));
		await dispatch(sessionActions.getMyBookings());
		if (location.pathname === "/") return navigate("/main");
		return;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				sessionActions.signup({
					firstName: firstName.trim(),
					lastName: lastName.trim(),
					email: email.trim(),
					password,
					confirmPassword,
				})
			);
			await dispatch(sessionActions.getMyBookings());
			if (location.pathname === "/") {
				return navigate("/main");
			}
			return;
		} catch (res) {
			const data = await res.json();
			if (data && data.errors)
				setErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
			return;
		}
	};

	return (
		<form
			className={`${styles.signup_form} ${
				active ? styles.visible : styles.invisible
			}`}
			onSubmit={handleSubmit}
		>
			<h1>Sign up</h1>
			{errors.length > 0 && (
				<div className={styles.form_error}>
					{errors.map((error, idx) => (
						<div key={idx}>{error}</div>
					))}
				</div>
			)}
			<label>First Name</label>
			<input
				className={styles.input}
				type="text"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				required
			/>
			<label>Last Name</label>
			<input
				className={styles.input}
				type="text"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				required
			/>
			<label>Email</label>
			<input
				className={styles.input}
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<label>Password</label>
			<input
				className={styles.input}
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				autoComplete="none"
				required
			/>
			<label>Confirm Password</label>
			<input
				className={styles.input}
				type="password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				autoComplete="none"
				required
			/>
			<button className={styles.signup_button} type="submit">
				Sign Up
			</button>
			<button
				className={styles.demo}
				onClick={() => demoLogin()}
				type="button"
			>
				Demo User
			</button>
		</form>
	);
};

export default SplashSignup;
