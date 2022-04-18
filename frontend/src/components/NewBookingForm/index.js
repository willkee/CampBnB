import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBooking } from "../../store/session";

import "react-calendar/dist/Calendar.css";
import styles from "./NewBooking.module.css";

const NewBookingForm = ({ spot }) => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [people, setPeople] = useState(1);
	const [existingBookings, setExistingBookings] = useState([]);
	const [errors, setErrors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const [confirm, setConfirm] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	const startDatePlusOne = new Date(startDate);
	startDatePlusOne.setDate(startDatePlusOne.getDate() + 1);

	useEffect(() => {
		const bookings = [];
		if (spot) {
			spot.Bookings.forEach((booking) => {
				if (new Date(booking.endDate) > new Date()) {
					let startDate = new Date(booking.startDate);
					let endDate = new Date(booking.endDate);

					while (startDate <= endDate) {
						bookings.push(new Date(startDate));
						startDate.setDate(startDate.getDate() + 1);
					}
				}
			});
		}
		setExistingBookings(bookings);
		setLoaded(true);
	}, [spot]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setConfirm(false);
		try {
			await dispatch(
				createBooking(spot.id, {
					spotId: spot.id,
					startDate,
					endDate,
					people,
				})
			);
			history.push("/profile");
		} catch (err) {
			const data = await err.json();
			if (data && data.errors) setErrors(data.errors);
			window.scrollTo({ top: 100 });
		}
	};

	const totalDays = () => {
		if (startDate && endDate) {
			// MILLISECOND TO DAY CONVERSION:
			// 1000 milliseconds in a second
			// 60 seconds in a minute
			// 60 minutes in an hour
			// 24 hours in a day
			return Math.floor(
				(new Date(endDate) - new Date(startDate)) /
					(1000 * 60 * 60 * 24)
			);
		}
		return 0;
	};

	const cancelChanges = () => {
		setStartDate();
		setEndDate();
		setPeople(1);
		setErrors([]);
		setConfirm(false);
	};

	return (
		<div
			className={
				spot.open ? styles.container_green : styles.container_red
			}
		>
			{loaded && (
				<>
					<h2 className={styles.title_booking}>Make A Booking</h2>
					{errors.length > 0 && (
						<div className={styles.error_container}>
							{errors.map((error, idx) => (
								<div key={idx}>{error}</div>
							))}
						</div>
					)}
					<form className={styles.booking_form}>
						<label>
							<span className={styles.labels}>Start Date</span>
							<div className={styles.calendar_container}>
								<Calendar
									minDate={new Date()}
									maxDate={
										new Date(
											new Date().setFullYear(
												new Date().getFullYear() + 1
											)
										)
									}
									minDetail="month"
									value={startDate}
									onChange={(e) => {
										setStartDate(e);
										setEndDate(
											new Date(
												new Date(e).setDate(
													e.getDate() + 1
												)
											)
										);
									}}
									tileDisabled={({ date, view }) =>
										!spot.open
											? true
											: view === "month" &&
											  existingBookings.some(
													(booked) =>
														date.getFullYear() ===
															new Date(
																booked
															).getFullYear() &&
														date.getMonth() ===
															new Date(
																booked
															).getMonth() &&
														date.getDate() ===
															new Date(
																booked
															).getDate()
											  )
									}
								/>
							</div>
						</label>
						<label>
							<span className={styles.labels}>End Date</span>
							<div className={styles.calendar_container}>
								<Calendar
									minDate={startDatePlusOne}
									maxDate={
										new Date(
											new Date().setFullYear(
												new Date().getFullYear() + 2
											)
										)
									}
									minDetail="month"
									value={endDate}
									onChange={(e) => setEndDate(e)}
									tileDisabled={({ date, view }) =>
										!spot.open
											? true
											: !startDate
											? true
											: view === "month" &&
											  existingBookings.some(
													(booked) =>
														date.getFullYear() ===
															new Date(
																booked
															).getFullYear() &&
														date.getMonth() ===
															new Date(
																booked
															).getMonth() &&
														date.getDate() ===
															new Date(
																booked
															).getDate()
											  )
									}
								/>
							</div>
						</label>
						<label className={styles.num_people}>
							<span className={styles.labels}>
								Number of people
							</span>
							<div className={styles.people_changer}>
								<div
									className={
										people === 1
											? styles.disable
											: styles.dec
									}
									onClick={() =>
										people > 1 && setPeople(people - 1)
									}
								>
									<i className="fa-regular fa-minus"></i>
								</div>
								<div>{people}</div>
								<div
									className={
										people === spot.capacity
											? styles.disable
											: styles.inc
									}
									onClick={() =>
										people < spot.capacity &&
										setPeople(people + 1)
									}
								>
									<i className="fa-regular fa-plus"></i>
								</div>
							</div>
						</label>
						<div
							className={styles.num_days}
						>{`Total Days: ${totalDays()}`}</div>
						<div className={styles.total_price}>
							{spot.price === 0 ? (
								"Total: Free"
							) : (
								<>
									{`Total: $${
										spot.price
									} x ${totalDays()} Days = $${
										spot.price * totalDays()
									}`}
								</>
							)}
						</div>

						{!confirm && (
							<button
								type="button"
								disabled={!spot.open ? true : false}
								onClick={() => setConfirm(true)}
								className={
									spot.open
										? styles.book_button
										: styles.disabled_button
								}
							>
								{!spot.open ? "Closed" : "Book"}
							</button>
						)}
					</form>
					{confirm && (
						<div className={styles.confirm_box}>
							<h4>Please confirm your details:</h4>
							<h5>Start Date:</h5>
							<div>
								{startDate
									? startDate.toDateString()
									: "Please enter a start date."}
							</div>
							<h5>End Date</h5>
							<div>
								{endDate
									? endDate.toDateString()
									: "Please enter an end date."}
							</div>
							<h5>Number of People</h5>
							<div>{people}</div>
							<button
								className={
									spot.open && startDate && endDate
										? styles.book_button
										: styles.disabled_button
								}
								type="button"
								disabled={
									!startDate || !endDate
										? true
										: !spot.open
										? true
										: false
								}
								onClick={handleSubmit}
							>
								Confirm Booking
							</button>
							<div
								className={styles.cancel_confirm}
								onClick={cancelChanges}
							>
								Cancel
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default NewBookingForm;
