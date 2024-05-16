import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideModal } from "../../store/modal/actions";
import { deleteSpot } from "../../store/spots/thunks";
import { getOneSpot } from "../../store/spots/thunks";

import styles from "./DeleteSpot.module.css";

const DeleteConfirmation = ({ id }) => {
	const [upcomingBookings, setUpcomingBookings] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const spots = useSelector((state) => state.spots);
	const spot = spots[id];
	const dates = spot?.Bookings?.map((booking) => booking.endDate);

	useEffect(() => {
		dispatch(getOneSpot(id));
		dates.forEach((date) => {
			if (new Date(date) > new Date()) {
				setUpcomingBookings(true);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, id]);

	if (!id || !spot) return navigate("/main");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(deleteSpot(id))
			.then(() => dispatch(hideModal()))
			.then(() => navigate("/main"));
	};

	return (
		<div className={styles.container}>
			<>
				<h1>Are you sure you want to delete this spot?</h1>
				{upcomingBookings && (
					<div className={styles.upcoming_bookings_warning}>
						Warning: There are upcoming bookings for this spot.
						These bookings will be cancelled automatically.
					</div>
				)}
				<div className={styles.buttons}>
					<button type="button" onClick={handleSubmit}>
						Delete
					</button>
					<button type="button" onClick={() => dispatch(hideModal())}>
						Cancel
					</button>
				</div>
			</>
		</div>
	);
};

export default DeleteConfirmation;
