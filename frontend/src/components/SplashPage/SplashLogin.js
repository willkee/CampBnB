import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./SplashPage.module.css";

function SplashLogin({ active }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(sessionActions.login(email, password));
			await dispatch(sessionActions.getMyBookings());

			if (location.pathname === "/") {
				return navigate("/main");
			}
			return;
		} catch (res) {
			const data = await res.json();
			if (data && data.errors) {
				console.log(data.errors);
				setErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
			}
		}
	};

	const demoLogin = async () => {
		await dispatch(sessionActions.login("demo@user.io", "password"));
		await dispatch(sessionActions.getMyBookings());
		if (location.pathname === "/") {
			return navigate("/main");
		}
		return;
	};

	return (
		<form
			className={`${styles.login_form} ${
				active ? styles.visible : styles.invisible
			}`}
			onSubmit={handleSubmit}
		>
			<h1>Sign in</h1>
			{errors.length > 0 && (
				<div className={styles.form_error}>
					{errors.map((error, idx) => (
						<div key={idx}>{error}</div>
					))}
				</div>
			)}
			<label>EMAIL ADDRESS</label>
			<input
				className={styles.input}
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<label>PASSWORD</label>
			<input
				className={styles.input}
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				autoComplete="none"
				required
			/>
			<button className={styles.login_button} type="submit">
				Sign In
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
}

export default SplashLogin;
