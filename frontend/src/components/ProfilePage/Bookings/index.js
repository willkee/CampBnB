import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyBookings } from "../../../store/session/thunks";
import { showModal, setCurrentModal } from "../../../store/modal/actions";
import { FiArrowRight } from "react-icons/fi";
import PastBookings from "./PastBookings";
import styles from "./Bookings.module.css";
import {
	FaPeopleArrows,
	FaPlus,
	FaMinus,
	FaCalendarXmark,
} from "react-icons/fa6";

import {
	PeopleGroup,
	CarMirrors,
	RV,
	Tent,
	Backpack,
} from "../../../assets/icons";

const Bookings = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoaded, setIsLoaded] = useState(false);

	const myBookings = useSelector((state) => state.session.bookings);

	useEffect(() => {
		dispatch(getMyBookings()).then(() => setIsLoaded(true));
	}, [dispatch]);

	const showEditPeopleModal = (booking) => {
		dispatch(
			setCurrentModal("EDIT_PEOPLE", {
				id: booking.id,
				initialData: booking,
			})
		);
		dispatch(showModal());
	};

	const showConfirm = (id) => {
		dispatch(setCurrentModal("CONFIRM_CANCEL", { id }));
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
						.sort(
							(a, b) => new Date(b.endDate) - new Date(a.endDate)
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
											navigate(
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
										<div className={styles.city_info}>
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
										<div className={styles.btn_container}>
											<button
												type="button"
												onClick={() =>
													showEditPeopleModal(booking)
												}
												className={styles.edit}
											>
												<FaMinus size={10} />
												<span>
													<FaPeopleArrows />
												</span>
												<FaPlus size={10} />
											</button>
											<button
												type="button"
												onClick={() =>
													showConfirm(booking.id)
												}
												className={styles.delete}
											>
												<FaCalendarXmark />
											</button>
										</div>
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
