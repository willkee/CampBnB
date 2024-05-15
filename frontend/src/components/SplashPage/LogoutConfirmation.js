import { useDispatch } from "react-redux";
import { XMark } from "../../assets/icons";
import styles from "./SplashPage.module.css";

import { setCurrentModal, hideModal } from "../../store/modal/actions";

import { logout } from "../../store/session/thunks";

const LogoutConfirmation = () => {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(setCurrentModal(null));
		dispatch(hideModal());
	};

	const confirmLogout = () => {
		dispatch(logout());
		closeModal();
	};

	return (
		<div className={styles.logout_container}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1>Sign out?</h1>
				<div className={styles.xmark_wrapper} onClick={closeModal}>
					<XMark />
				</div>
			</div>
			<button className={styles.logout} onClick={confirmLogout}>
				Yes, sign out.
			</button>
		</div>
	);
};

export default LogoutConfirmation;
