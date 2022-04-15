import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyBookings } from "../../store/bookings";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);
	const myBookings = useSelector((state) => Object.values(state.bookings));

	const futureBookings = myBookings.filter(
		(booking) => new Date(booking.startDate) > new Date()
	);

	const pastBookings = myBookings.filter(
		(booking) => new Date(booking.startDate) < new Date()
	);

	useEffect(() => {
		dispatch(getMyBookings()).then(() => setIsLoaded(true));
	}, [dispatch]);

	if (!sessionUser) {
		return history.push("/main");
	}

	return (
		<div className={styles.pf_oc}>
			{isLoaded && (
				<div className={styles.profile_container}>
					<div className={styles.name_cont}>
						<h1>{`${sessionUser.firstName} ${sessionUser.lastName}`}</h1>
					</div>
					<div className={styles.content_all}>
						<div className={styles.left}>Bookings</div>

						<div className={styles.main}>
							<h2 className={styles.subheading}>
								Upcoming Bookings
							</h2>
							{futureBookings.map((booking) => (
								<div
									className={styles.each_booking}
									key={booking.id}
								>
									<img
										src={booking.Spot.imageUrl}
										alt="spot"
									/>
									<div className={styles.each_booking_right}>
										<div
											className={styles.booking_spotInfo}
										>
											<h3>{booking.Spot.name}</h3>
											<div>{booking.Spot.city}</div>
										</div>
										<div className={styles.time_container}>
											<div>
												Start:
												{new Date(
													booking.startDate
												).toDateString()}
											</div>
											<div>
												End:
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
												{booking.Spot.type ===
												"vehicle" ? (
													<i className="fa-solid fa-car-mirrors" />
												) : booking.Spot.type ===
												  "rv" ? (
													<i className="fa-solid fa-rv" />
												) : booking.Spot.type ===
												  "tent" ? (
													<i className="fa-solid fa-tent" />
												) : booking.Spot.type ===
												  "backpacking" ? (
													<i className="fa-solid fa-backpack" />
												) : (
													""
												)}
											</div>
											<button className={styles.edit}>
												Edit
											</button>
											<button className={styles.delete}>
												Cancel
											</button>
										</div>
									</div>
								</div>
							))}
							<h2 className={styles.subheading}>Past Bookings</h2>
							{pastBookings.map((booking) => (
								<div
									className={styles.each_booking}
									key={booking.id}
									id={styles.past_info}
								>
									<img
										src={booking.Spot.imageUrl}
										alt="spot"
										className={styles.img_past}
									/>
									<div className={styles.each_booking_right}>
										<div
											className={styles.booking_spotInfo}
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
												{booking.Spot.type ===
												"vehicle" ? (
													<i className="fa-solid fa-car-mirrors" />
												) : booking.Spot.type ===
												  "rv" ? (
													<i className="fa-solid fa-rv" />
												) : booking.Spot.type ===
												  "tent" ? (
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
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
