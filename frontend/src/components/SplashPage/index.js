import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

// import { currentModal, showModal } from "../../store/modal";
// import LoginForm from "../LoginForm";
// import SignUpForm from "../SignUpForm";
import styles from "./SplashPage.module.css";

import SplashLogin from "./SplashLogin";

const SplashPage = ({ sessionUser }) => {
	const navigate = useNavigate();
	// const displaySignupForm = () => {
	// 	dispatch(currentModal(SignUpForm));
	// 	dispatch(showModal());
	// };

	// const displayLoginForm = () => {
	// 	dispatch(currentModal(LoginForm));
	// 	dispatch(showModal());
	// };

	useEffect(() => {
		if (sessionUser) {
			navigate("/main");
		}
	}, [sessionUser, navigate]);

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<header>
					<img
						src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
						alt="green logo"
					/>
					<p>campbnb</p>
				</header>
				<SplashLogin />
			</div>
			{/* <div className={styles.splash_content}>
				<img
					src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
					alt="green logo"
				/>
				<h1>Welcome to CampBnB</h1>
				<p>Escape and discover your next outdoor adventure.</p>
				<p>
					CampBnB is a site where you can find and discover new places
					to camp within the state of Colorado. If you have a place to
					share, you can list your spot too.
				</p>
				<div className={styles.buttons}>
					{sessionUser ? (
						<>
							<div>{`Welcome back ${sessionUser.firstName}!`}</div>
							<div
								className={styles.just_browsing}
								onClick={() => navigate("/main")}
							>
								<div>Enter Here</div>
							</div>
						</>
					) : (
						<div className={styles.splash_button_container}>
							<div className={styles.signup_login}>
								<div className={styles.new_user}>
									Joining us for the first time?
									<div
										role="button"
										onClick={displaySignupForm}
									>
										Sign Up
									</div>
								</div>
								<div className={styles.demo_user}>
									Demo the Site
									<div role="button" onClick={demoLogin}>
										Demo User
									</div>
								</div>
								<div className={styles.existing_user}>
									Returning user?
									<div
										role="button"
										onClick={displayLoginForm}
									>
										Log In
									</div>
								</div>
							</div>
							<div>
								Just browsing? Explore the site{" "}
								<span
									id={styles.here}
									onClick={() => navigate("/main")}
								>
									here
								</span>
								.
							</div>
						</div>
					)}
				</div>
			</div> */}
		</div>
	);
};

export default SplashPage;
