import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteSpot } from "../../../store/spots/thunks";
import { hideModal, setCurrentModal } from "../../../store/modal/actions";
import styles from "./ConfirmDeleteSpot.module.css";

const ConfirmDeleteSpot = ({ id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const closeModal = () => {
		dispatch(hideModal());
		dispatch(setCurrentModal(null, null));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(deleteSpot(id))
			.then(() => {
				closeModal();
				navigate("/main");
			})
			.catch((e) =>
				console.error(`Error: Failed to delete spot. Details: ${e}`)
			);
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
						<FiTrash2 className={styles.modal_background_icon} />
						<div className={styles.modal_body}>
							<div className={styles.modal_icon_container}>
								<FiTrash2 />
							</div>
							<h3 className={styles.modal_title}>
								Confirm Deletion
							</h3>
							<div className={styles.modal_buttons}>
								<button
									onClick={closeModal}
									className={styles.cancel_button}
								>
									Cancel
								</button>
								<button
									onClick={handleSubmit}
									className={styles.delete_button}
								>
									Confirm deletion
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	);
};

export default ConfirmDeleteSpot;
