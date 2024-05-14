import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SplashLogin from "./SplashLogin";
import SplashSignup from "./SplashSignup";
import styles from "./SplashPage.module.css";

import AboutModal from "./AboutModal";
import { useDispatch } from "react-redux";
import { currentModal, showModal } from "../../store/modal";
// import LoginForm from "../LoginForm";
// import SignUpForm from "../SignUpForm";

import { CircleQuestion } from "../../assets/icons";

const SplashPage = ({ sessionUser }) => {
	const [activeForm, setActiveForm] = useState("signin");
	const [switchMessage, setSwitchMessage] = useState("No account? Sign up.");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const content = useRef(null);
	const [sz, setSz] = useState({ height: 0, width: 0 });

	useEffect(() => {
		setSz(content.current.getBoundingClientRect());
	}, [activeForm]);

	// useEffect(() => {
	// 	if (sessionUser) navigate("/main");
	// }, [sessionUser, navigate]);

	const showAboutModal = () => {
		dispatch(currentModal(AboutModal));
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
