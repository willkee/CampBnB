import { useDispatch } from "react-redux";
import { deleteBooking } from "../../../../store/session/thunks";
import { hideModal } from "../../../../store/modal/actions";
import styles from "../Bookings.module.css";

const ConfirmCancel = ({ id }) => {
	const dispatch = useDispatch();

	const cancelBooking = (id) => {
		dispatch(deleteBooking(id)).then(() => dispatch(hideModal()));
	};

	return (
		<div className={styles.confirm_window}>
			<h2>Are you sure you wish to cancel this booking?</h2>
			<div className={styles.confirm_button_container}>
				<button type="button" onClick={() => cancelBooking(id)}>
					Cancel Booking
				</button>
				<button onClick={() => dispatch(hideModal())} type="button">
					Keep My Booking
				</button>
			</div>
		</div>
	);
};

export default ConfirmCancel;
