import styles from "../Bookings.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const PastBookings = ({ myBookings }) => {
	const history = useHistory();
	const [loaded, setLoaded] = useState(false);
	const [pastBookings, setPastBookings] = useState();

	useEffect(() => {
		const bookings = Object.values(myBookings);
		bookings.forEach(
			(booking) =>
				(booking.startDate = new Date(booking.startDate)
					.setHours(0, 0, 0, 0)
					.valueOf())
		);
		setPastBookings(
			bookings
				.filter(
					(booking) =>
						booking.startDate <
						new Date().setHours(0, 0, 0, 0).valueOf()
				)
				.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
		);
		setLoaded(true);

		return () => {
			setLoaded(false);
			setPastBookings([]);
		};
	}, [myBookings]);

	return (
		<>
			{loaded && (
				<div>
					<h2 id={styles.past_bookings} className={styles.subheading}>
						Past Bookings
					</h2>
					{!pastBookings.length && (
						<div className={styles.no_bookings}>
							No previous bookings.
						</div>
					)}
					{pastBookings.map((booking) => (
						<div
							className={styles.each_booking}
							key={booking.id}
							id={styles.past_info}
						>
							<img
								src={booking.Spot.imageUrl}
								alt="spot"
								onError={(e) => {
									e.onerror = null;
									e.target.src =
										"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
								}}
								className={styles.img_past}
							/>
							<div className={styles.each_booking_right}>
								<div
									className={styles.booking_spotInfo}
									onClick={() =>
										history.push(
											`/spots/${booking.Spot.id}`
										)
									}
								>
									<h3 id={styles.past_info}>
										{booking.Spot.name}
									</h3>
									<div id={styles.past_info}>
										{booking.Spot.city}
									</div>
								</div>
								<div className={styles.time_container}>
									<div>
										Started:{"  "}
										{new Date(
											booking.startDate
										).toDateString()}
									</div>
									<div>
										Ended:{"  "}
										{new Date(
											booking.endDate
										).toDateString()}
									</div>
								</div>
								<div className={styles.each_more_info}>
									<div>
										<i className="fa-thin fa-people-group" />{" "}
										<span className={styles.num}>
											{booking.people}
										</span>
									</div>
									<div>
										{booking.Spot.type === "vehicle" ? (
											<i className="fa-solid fa-car-mirrors" />
										) : booking.Spot.type === "rv" ? (
											<i className="fa-solid fa-rv" />
										) : booking.Spot.type === "tent" ? (
											<i className="fa-solid fa-tent" />
										) : booking.Spot.type ===
										  "backpacking" ? (
											<i className="fa-solid fa-backpack" />
										) : (
											""
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default PastBookings;
