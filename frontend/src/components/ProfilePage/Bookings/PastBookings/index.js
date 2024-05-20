import styles from "../Bookings.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
	PeopleGroup,
	RV,
	Tent,
	Backpack,
	CarMirrors,
} from "../../../../assets/icons";

const PastBookings = ({ myBookings }) => {
	const navigate = useNavigate();
	const [loaded, setLoaded] = useState(false);
	const [pastBookings, setPastBookings] = useState([]);

	useEffect(() => {
		const bookings = Object.values(myBookings).map((booking) => ({
			...booking,
			startDate: new Date(booking.startDate)
				.setHours(0, 0, 0, 0)
				.valueOf(),
		}));

		const _pastBookings = bookings
			.filter(
				(booking) =>
					booking.startDate <
					new Date().setHours(0, 0, 0, 0).valueOf()
			)
			.sort((a, b) => new Date(b.endDate - new Date(a.endDate)));

		setPastBookings(_pastBookings);
		setLoaded(true);
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
									className={styles.booking_spotInfo_past}
									onClick={() =>
										navigate(`/spots/${booking.Spot.id}`)
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
										{new Date(booking.startDate)
											.toDateString()
											.slice(4)}
									</div>
									<span
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<FiArrowRight />
									</span>
									<div>
										{new Date(booking.endDate)
											.toDateString()
											.slice(4)}
									</div>
								</div>
								<div className={styles.each_more_info}>
									<div>
										<PeopleGroup />
										<span className={styles.num}>
											{booking.people}
										</span>
									</div>
									<div>
										{booking.Spot.type === "vehicle" ? (
											<CarMirrors />
										) : booking.Spot.type === "rv" ? (
											<RV />
										) : booking.Spot.type === "tent" ? (
											<Tent />
										) : booking.Spot.type ===
										  "backpacking" ? (
											<Backpack />
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
