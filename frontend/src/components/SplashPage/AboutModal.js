import { useDispatch } from "react-redux";
import { XMark } from "../../assets/icons";
import styles from "./SplashPage.module.css";

import { setCurrentModal, hideModal } from "../../store/modal/actions";

const AboutModal = () => {
	const dispatch = useDispatch();

	const closeAboutModal = () => {
		dispatch(setCurrentModal(null));
		dispatch(hideModal());
	};

	return (
		<div className={styles.about_container}>
			<header>
				<div className={styles.logo_wrapper}>
					<img
						src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
						alt="green logo"
					/>
					<p style={{ marginRight: "10px" }}>campbnb</p>
				</div>
				<div className={styles.xmark_wrapper} onClick={closeAboutModal}>
					<XMark />
				</div>
			</header>
			<h1>Welcome!</h1>
			<h3>Escape and discover your next outdoor adventure.</h3>
			<p>
				CampBnB is a site where you can find and discover new places to
				camp within the state of Colorado. If you have a place to share,
				you can list your spot too!
			</p>
		</div>
	);
};

export default AboutModal;
