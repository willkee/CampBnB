import { HexagonCheck, HexagonX } from "../../../assets/icons";
import styles from "../SingleSpot.module.css";

const AcceptBookings = ({ spot }) => {
	return (
		<div
			className={
				spot.open
					? styles.accept_container_green
					: styles.accept_container_red
			}
		>
			<span>{spot.open ? <HexagonCheck /> : <HexagonX />}</span>
			<span className={spot.open ? styles.green : styles.red}>
				{spot.open ? "Accepting New Bookings" : "No New Bookings"}
			</span>
		</div>
	);
};

export default AcceptBookings;
