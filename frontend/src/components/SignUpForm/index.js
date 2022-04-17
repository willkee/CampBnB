import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { currentModal, hideModal } from "../../store/modal";
import "./SignUpForm.css";
import LoginForm from "../LoginForm";

function SignUpForm() {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const showLogin = () => dispatch(currentModal(LoginForm));

	const demoLogin = async (e) => {
		e.preventDefault();
		await dispatch(sessionActions.login("demo@user.io", "password"));
		await dispatch(sessionActions.getMyBookings());
		await dispatch(hideModal());
		if (location.pathname === "/") {
			return history.push("/main");
		}
		return;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				sessionActions.signup({
					firstName,
					lastName,
					email,
					password,
					confirmPassword,
				})
			);
			await dispatch(sessionActions.getMyBookings());
			await dispatch(hideModal());
			if (location.pathname === "/") {
				return history.push("/main");
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
		<div className="sign_up_outer_container">
			<img
				src={`${process.env.PUBLIC_URL}/images/logo_only_dark.png`}
				alt="CampBnB Logo"
				className="sign_up_logo"
			/>
			<h2>Welcome to CampBnB!</h2>
			<form className="sign_up_form_container" onSubmit={handleSubmit}>
				<div className="error_outer_container">
					{errors.length > 0 && (
						<div className="error_container">
							{errors.map((error, idx) => (
								<div key={idx}>{error}</div>
							))}
						</div>
					)}
				</div>
				<label className="signup_label">
					First Name
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				<label className="signup_label">
					Last Name
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				<label className="signup_label">
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label className="signup_label">
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="none"
						required
					/>
				</label>
				<label className="signup_label">
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						autoComplete="none"
						required
					/>
				</label>
				<div className="signup_button_container">
					<button type="submit">Sign Up</button>
					<button type="button" onClick={() => dispatch(hideModal())}>
						Cancel
					</button>
				</div>
				<div className="demo_user_button" onClick={demoLogin}>
					Demo User
				</div>
				<div
					className="login_signup_switch"
					role="button"
					onClick={showLogin}
				>
					Already have an account? Log in here.
				</div>
			</form>
		</div>
	);
}

export default SignUpForm;
