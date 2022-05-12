import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyBookings } from "../../../store/session";
import { showModal, currentModal } from "../../../store/modal";

import PastBookings from "./PastBookings";
import EditPeople from "./Utils/EditPeople";
import ConfirmCancel from "./Utils/ConfirmCancel";

import styles from "./Bookings.module.css";

const Bookings = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);

	const myBookings = useSelector((state) => state.session.bookings);

	useEffect(() => {
		dispatch(getMyBookings()).then(() => setIsLoaded(true));
	}, [dispatch]);

	const showEditPeopleModal = (booking) => {
		dispatch(currentModal(() => <EditPeople booking={booking} />));
		dispatch(showModal());
	};

	const showConfirm = (id) => {
		dispatch(currentModal(() => <ConfirmCancel id={id} />));
		dispatch(showModal());
	};

	return (
		<>
			{isLoaded && (
				<div>
					{/* ----------------------------- */}
					{/* ----- UPCOMING BOOKINGS ----- */}
					{/* ----------------------------- */}

					<h2 className={styles.subheading}>Upcoming Bookings</h2>
					{Object.values(myBookings).filter(
						(booking) =>
							new Date(booking.startDate)
								.setHours(0, 0, 0, 0)
								.valueOf() >=
							new Date().setHours(0, 0, 0, 0).valueOf()
					).length === 0 && (
						<div className={styles.no_bookings}>
							No Upcoming Bookings.
						</div>
					)}
					{Object.values(myBookings)
						.filter(
							(booking) =>
								new Date(booking.startDate)
									.setHours(0, 0, 0, 0)
									.valueOf() >=
								new Date().setHours(0, 0, 0, 0).valueOf()
						)
						.map((booking) => (
							<div
								className={styles.each_booking}
								key={booking.id}
							>
								<img
									src={booking.Spot.imageUrl}
									alt="spot"
									className={styles.booking_img}
									onError={(e) => {
										e.onerror = null;
										e.target.src =
											"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
									}}
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
										<h3>
											{booking?.Spot?.name?.length > 50
												? booking?.Spot?.name?.slice(
														0,
														50
												  ) + "..."
												: booking?.Spot?.name}
										</h3>
										<div>
											{booking?.Spot?.city?.length > 50
												? booking?.Spot?.city?.slice(
														0,
														50
												  ) + "..."
												: booking?.Spot?.city}
										</div>
									</div>
									<div className={styles.time_container}>
										<div>
											Start:{" "}
											{new Date(
												booking.startDate
											).toDateString()}
										</div>
										<div>
											End:{" "}
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

										<button
											type="button"
											onClick={() =>
												showEditPeopleModal(booking)
											}
											className={styles.edit}
										>
											Edit People
										</button>
										<button
											type="button"
											onClick={() =>
												showConfirm(booking.id)
											}
											className={styles.delete}
										>
											Cancel Booking
										</button>
									</div>
								</div>
							</div>
						))}
					<PastBookings myBookings={myBookings} />
				</div>
			)}
		</>
	);
};

export default Bookings;
