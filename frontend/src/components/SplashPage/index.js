import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentModal, showModal } from "../../store/modal";

import SplashLogin from "./SplashLogin";
import SplashSignup from "./SplashSignup";
import AboutModal from "./AboutModal";
import LogoutConfirmation from "./LogoutConfirmation";

import { CircleQuestion } from "../../assets/icons";
import styles from "./SplashPage.module.css";

const SplashPage = ({ sessionUser }) => {
	const [activeForm, setActiveForm] = useState("signin");
	const [switchMessage, setSwitchMessage] = useState("No account? Sign up.");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const content = useRef(null);
	const [sz, setSz] = useState({ height: 0, width: 0 });

	useEffect(() => {
		setSz(content.current.getBoundingClientRect());
	}, [activeForm, sessionUser]);

	const continueToSite = () => navigate("/main");

	const showAboutModal = () => {
		dispatch(currentModal(AboutModal));
		dispatch(showModal());
	};

	const showLogoutModal = () => {
		dispatch(currentModal(LogoutConfirmation));
		dispatch(showModal());
	};

	const handleSwitch = () => {
		if (activeForm === "signin") {
			setActiveForm("signup");
			setSwitchMessage("Have an account? Sign in.");
		} else {
			setActiveForm("signin");
			setSwitchMessage("No account? Sign up.");
		}
	};

	if (sessionUser) {
		return (
			<div className={styles.container}>
				<div
					className={styles.main}
					style={{ height: `${sz.height}px` }}
				>
					<div className={styles.content} ref={content}>
						<img
							src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
							style={{ width: "40px", marginBottom: "20px" }}
							alt="green logo"
						/>
						<h2>Hello {sessionUser.firstName}!</h2>

						<p className={styles.continue_msg}>
							You are currently logged in.
						</p>
						<button
							type="button"
							className={styles.continue}
							onClick={continueToSite}
						>
							Continue to Site
						</button>
						<div
							className={styles.continue_sign_out}
							onClick={showLogoutModal}
						>
							Sign out instead?
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.main} style={{ height: `${sz.height}px` }}>
				<div className={styles.content} ref={content}>
					<header>
						<img
							src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
							alt="green logo"
						/>
						<p style={{ marginRight: "10px" }}>campbnb</p>
						<div onClick={showAboutModal}>
							<CircleQuestion />
						</div>
					</header>
					<SplashLogin active={activeForm === "signin"} />
					<SplashSignup active={activeForm === "signup"} />
					<button
						className={styles.switch_button}
						type="button"
						onClick={handleSwitch}
					>
						{switchMessage}
					</button>
				</div>
			</div>
		</div>
	);
};

export default SplashPage;
