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
			<span>
				{spot.open ? (
					<i
						id={styles.green}
						className="fa-light fa-hexagon-check"
					/>
				) : (
					<i id={styles.red} className="fa-light fa-hexagon-xmark" />
				)}
			</span>
			<span className={spot.open ? styles.green : styles.red}>
				{spot.open ? "Accepting New Bookings" : "No New Bookings"}
			</span>
		</div>
	);
};

export default AcceptBookings;
