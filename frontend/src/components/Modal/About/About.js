import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { hideModal, setCurrentModal } from "../../../store/modal/actions";
import styles from "./About.module.css";

const About = () => {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(hideModal());
		dispatch(setCurrentModal(null, null));
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
						<div className={styles.modal_body}>
							<div className={styles.logo_wrapper}>
								<img
									src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
									alt="green logo"
								/>
								<p style={{ marginRight: "10px" }}>campbnb</p>
							</div>
							<h3 className={styles.modal_title}>
								Escape and discover your next adventure.
							</h3>
							<p className={styles.modal_text}>
								CampBnB is a site where you can find and
								discover new places to camp within the state of
								Colorado. If you have a place to share, you can
								list your spot too!
							</p>
							<div className={styles.modal_buttons}>
								<button
									onClick={closeModal}
									className={styles.cancel_button}
								>
									Close
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	);
};

export default About;

// 	return (
// 		<div className={styles.about_container}>
// 			<header>
// 				<div className={styles.logo_wrapper}>
// 					<img
// 						src={`${process.env.PUBLIC_URL}/images/logo_only.png`}
// 						alt="green logo"
// 					/>
// 					<p style={{ marginRight: "10px" }}>campbnb</p>
// 				</div>
// 				<div className={styles.xmark_wrapper} onClick={closeAboutModal}>
// 					<XMark />
// 				</div>
// 			</header>
// 			<h1>Welcome!</h1>
// 			<h3>Escape and discover your next outdoor adventure.</h3>
// 			<p>
// 				CampBnB is a site where you can find and discover new places to
// 				camp within the state of Colorado. If you have a place to share,
// 				you can list your spot too!
// 			</p>
// 		</div>
// 	);
// };

// export default AboutModal;
