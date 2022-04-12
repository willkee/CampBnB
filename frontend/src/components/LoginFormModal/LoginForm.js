// import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { useDispatch } from "react-redux";
// import { hideModal } from "../../store/modal";

// import "./LoginForm.css";

// function LoginForm() {
// 	const dispatch = useDispatch();
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [errors, setErrors] = useState([]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setErrors([]);
// 		return dispatch(sessionActions.login({ email, password })).catch(
// 			async (res) => {
// 				const data = await res.json();
// 				if (data && data.errors) return setErrors(data.errors);
// 				dispatch(hideModal());
// 			}
// 		);
// 	};

// 	return (
// 		<>
// 			<h1>Log In</h1>
// 			<form onSubmit={handleSubmit}>
// 				<ul>
// 					{errors.map((error, idx) => (
// 						<li key={idx}>{error}</li>
// 					))}
// 				</ul>
// 				<label>
// 					Username or Email
// 					<input
// 						type="text"
// 						value={email}
// 						onChange={(e) => setEmail(e.target.value)}
// 						required
// 					/>
// 				</label>
// 				<label>
// 					Password
// 					<input
// 						type="password"
// 						value={password}
// 						onChange={(e) => setPassword(e.target.value)}
// 						required
// 					/>
// 				</label>
// 				<button type="submit">Log In</button>
// 			</form>
// 		</>
// 	);
// }

// export default LoginForm;
