import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { hideModal, currentModal } from "../../store/modal";
import "./LoginForm.css";
import SignUpForm from "../SignUpForm";

function LoginForm() {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const showSignUp = () => dispatch(currentModal(SignUpForm));

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(sessionActions.login(email, password));
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
		}
	};

	const demoLogin = async (e) => {
		e.preventDefault();
		await dispatch(sessionActions.login("demo@user.io", "password"));
		await dispatch(hideModal());
		if (location.pathname === "/") {
			return history.push("/main");
		}
		return;
	};

	return (
		<div className="log_in_container">
			<img
				src={`${process.env.PUBLIC_URL}/images/logo_only_dark.png`}
				alt="CampBnB Logo"
				className="sign_up_logo"
			/>
			<h2>Welcome back!</h2>
			<form onSubmit={handleSubmit}>
				{errors.length > 0 && (
					<div className="error_container">
						{errors.map((error, idx) => (
							<div key={idx}>{error}</div>
						))}
					</div>
				)}
				<label className="login_label">
					<span>Email</span>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label className="login_label">
					<span>Password</span>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<div className="login_button_container">
					<button type="submit">Log In</button>
					<button type="button" onClick={() => dispatch(hideModal())}>
						Cancel
					</button>
				</div>
				<div className="demo_user_button" onClick={demoLogin}>
					Demo User
				</div>
				<div
					role="button"
					className="login_signup_switch"
					onClick={showSignUp}
				>
					Don't have an account? Sign up here.
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
