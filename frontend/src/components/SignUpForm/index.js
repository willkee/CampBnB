import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { hideModal } from "../../store/modal";
import "./SignUpForm.css";

function SignUpForm() {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(
				sessionActions.signup({ firstName, lastName, email, password })
			)
				.then(() => dispatch(hideModal()))
				.catch(async (res) => {
					const data = await res.json();
					if (data && data.errors) setErrors(data.errors);
				});
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
			</form>
		</>
	);
}

export default SignUpForm;
