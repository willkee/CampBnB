import { useDispatch } from "react-redux";
import { showModal, setCurrentModal } from "../../../store/modal/actions";
import { switchOpening } from "../../../store/spots/thunks";
import AcceptBookings from "./AcceptBookings";
import styles from "../SingleSpot.module.css";

const OwnerControls = ({ sessionUser, spot }) => {
	const dispatch = useDispatch();

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

	const openClose = async () => await dispatch(switchOpening(spot.id));

	return (
		<>
			{sessionUser && (
				<div>
					<div>
						<AcceptBookings spot={spot} />
						<div className={styles.switch} onClick={openClose}>
							{spot.open
								? "Stop New Bookings?"
								: "Accept New Bookings?"}
						</div>
					</div>
					<div
						className={styles.edit}
						onClick={() => editSpotForm(spot)}
					>
						Edit Spot
					</div>
					<div
						className={styles.delete}
						onClick={() => showDeleteConfirmation(spot.id)}
					>
						Delete Spot
					</div>
				</div>
			)}
		</>
	);
};

export default OwnerControls;
