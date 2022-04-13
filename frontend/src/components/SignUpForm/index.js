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

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);

			try {
				await dispatch(
					sessionActions.signup({
						firstName,
						lastName,
						email,
						password,
					})
				);
				await dispatch(hideModal());
				if (location.pathname === "/") {
					return history.push("/main");
				}
				return;
			} catch (res) {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			}
		}
		return setErrors(["Passwords do not match."]);
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					First Name
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				<label>
					Last Name
					<input
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
				<button type="button" onClick={() => dispatch(hideModal())}>
					Cancel
				</button>
				<div role="button" onClick={showLogin}>
					Already have an account? Log in here.
				</div>
			</form>
		</>
	);
}

export default SignUpForm;
