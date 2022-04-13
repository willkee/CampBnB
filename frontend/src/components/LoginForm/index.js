import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { hideModal, currentModal } from "../../store/modal";
import "./LoginForm.css";
import SignUpForm from "../SignUpForm";

function LoginForm() {
	const dispatch = useDispatch();
	const location = useLocation();
	const sessionUser = useSelector((state) => state.session.user);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return dispatch(hideModal());

	const showSignUp = () => dispatch(currentModal(SignUpForm));

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(sessionActions.login({ email, password }));
			await dispatch(hideModal());

			if (location.pathname === "/") {
				return <Redirect to="/main" />;
			}
		} catch (res) {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};

	return (
		<div className="log_in_container">
			<h1>Log In</h1>
			<form onSubmit={handleSubmit}>
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
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
				<button type="submit">Log In</button>
				<button type="button" onClick={() => dispatch(hideModal())}>
					Cancel
				</button>
				<div role="button" onClick={showSignUp}>
					Don't have an account? Sign up here.
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
