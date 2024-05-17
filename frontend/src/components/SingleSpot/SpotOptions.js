import { FiCalendar, FiEdit, FiTrash2, FiLock, FiUnlock } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCurrentModal, showModal } from "../../store/modal/actions";
import styles from "./SingleSpot.module.css";
import { switchOpening } from "../../store/spots/thunks";

const SpotOptions = ({ id, sessionUser, spot }) => {
	const dispatch = useDispatch();

	const userIsOwner = sessionUser.id === spot.ownerId;

	const showBookingModal = () => {
		dispatch(setCurrentModal("NEW_BOOKING", { id, initialData: spot }));
		dispatch(showModal());
	};

	const switchClass = spot.open ? styles.switch_open : styles.switch_closed;

	if (userIsOwner) {
		const openClose = async () => await dispatch(switchOpening(spot.id));
		const editSpotForm = (spot) => {
			dispatch(
				setCurrentModal("EDIT_SPOT_FORM", {
					id: spot.id,
					initialData: spot,
				})
			);
			dispatch(showModal());
		};

		const showDeleteConfirmation = (id) => {
			dispatch(setCurrentModal("DELETE_CONFIRMATION", { id }));
			dispatch(showModal());
		};

		return (
			<div className={styles.owner_controls}>
				<div>
					<div className={switchClass} onClick={openClose}>
						{spot.open ? (
							<FiUnlock size={20} />
						) : (
							<FiLock size={20} />
						)}
					</div>
				</div>
				<div className={styles.edit} onClick={() => editSpotForm(spot)}>
					<FiEdit size={20} />
				</div>
				<div
					className={styles.delete}
					onClick={() => showDeleteConfirmation(spot.id)}
				>
					<FiTrash2 size={20} />
				</div>
			</div>
		);
	}

	if (!spot.open) {
		return (
			<div className={styles.disabled_bookings}>
				The owner has disabled new bookings
			</div>
		);
	}
	return (
		<>
			{sessionUser && sessionUser.id !== spot.ownerId && (
				<button
					type="button"
					className={styles.book_button}
					onClick={showBookingModal}
				>
					<FiCalendar />
					<span>Book Now</span>
				</button>
			)}
		</>
	);
};

export default SpotOptions;
