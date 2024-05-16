import { AnimatePresence, motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session/thunks";

import { hideModal, setCurrentModal } from "../../../store/modal/actions";
import styles from "./SignOut.module.css";

const SignOut = () => {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(hideModal());
		dispatch(setCurrentModal(null, null));
	};

	const confirmLogout = () => {
		dispatch(logout());
		closeModal();
	};

	return (
		<AnimatePresence>
			{
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={closeModal}
					className={styles.modal_overlay}
				>
					<motion.div
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className={styles.modal_content}
					>
						<FiLogOut className={styles.modal_background_icon} />
						<div className={styles.modal_body}>
							<div className={styles.modal_icon_container}>
								<FiLogOut />
							</div>
							<h3 className={styles.modal_title}>Sign out?</h3>
							<div className={styles.modal_buttons}>
								<button
									onClick={closeModal}
									className={styles.cancel_button}
								>
									Cancel
								</button>
								<button
									onClick={confirmLogout}
									className={styles.signout_button}
								>
									Sign me out.
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	);
};

export default SignOut;
