import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FiCalendar, FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../../../store/session/thunks";
import { hideModal, setCurrentModal } from "../../../store/modal/actions";
import styles from "./NewBooking.module.css";

const NewBookingModal = ({ id, initialData }) => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [people, setPeople] = useState(1);
	const [existingBookings, setExistingBookings] = useState([]);
	const [errors, setErrors] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const bookings = [];
		if (initialData) {
			initialData.Bookings.forEach((booking) => {
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
	}, [id, initialData]);

	const closeModal = () => {
		dispatch(hideModal());
		dispatch(setCurrentModal(null, null));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await dispatch(
				createBooking(initialData.id, {
					spotId: initialData.id,
					startDate,
					endDate,
					people,
				})
			);
			navigate("/profile");
			dispatch(hideModal());
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
		return null;
	};

	const cancelChanges = () => {
		setStartDate();
		setEndDate();
		setPeople(1);
		setErrors([]);
		closeModal();
	};

	const add = people === initialData.capacity ? styles.disable : styles.inc;
	const addFn = () => people < initialData.capacity && setPeople(people + 1);
	const minus = people === 1 ? styles.disable : styles.dec;
	const minusFn = () => people > 1 && setPeople(people - 1);

	const summary = totalDays()
		? `${totalDays()} ${totalDays() > 1 ? "Days" : "Day"}, $${
				initialData.price * totalDays()
		  }`
		: "Pending";

	const sumContainer = totalDays()
		? styles.sum_container
		: styles.sum_pending;

	const validStartDate = new Date(startDate);
	validStartDate.setDate(validStartDate.getDate() + 1);

	return (
		<AnimatePresence>
			{
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={closeModal}
					className={styles.modal_overlay}
				>
					<motion.div
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className={styles.modal_content}
					>
						<FiCalendar className={styles.modal_background_icon} />
						<div className={styles.modal_body}>
							<div className={styles.modal_icon_container}>
								<FiCalendar />
							</div>
							<h3 className={styles.modal_title}>
								Make a Booking
							</h3>
							{errors.length > 0 && (
								<div className={styles.error_container}>
									{errors.map((error, idx) => (
										<div key={idx}>{error}</div>
									))}
								</div>
							)}
							<form className={styles.booking_form}>
								<label>
									<span className={styles.label_1}>
										Start Date
									</span>
									<div className={styles.calendar_container}>
										<Calendar
											minDate={new Date()}
											maxDate={
												new Date(
													new Date().setFullYear(
														new Date().getFullYear() +
															1
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
												!initialData.open
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
									<span className={styles.label_1}>
										End Date
									</span>
									<div className={styles.calendar_container}>
										<Calendar
											minDate={validStartDate}
											maxDate={
												new Date(
													new Date().setFullYear(
														new Date().getFullYear() +
															2
													)
												)
											}
											minDetail="month"
											value={endDate}
											onChange={(e) => setEndDate(e)}
											tileDisabled={({ date, view }) =>
												!initialData.open
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
									<span className={styles.label_2}>
										# of people
									</span>
									<div className={styles.people_changer}>
										<span
											className={minus}
											onClick={minusFn}
										>
											<FiMinus size={20} />
										</span>
										<span>{people}</span>
										<span className={add} onClick={addFn}>
											<FiPlus size={20} />
										</span>
									</div>
								</label>
								<div className={styles.dates}>
									<span className={styles.label_2}>In</span>
									<span>
										{startDate
											? startDate.toDateString()
											: "Pending"}
									</span>
								</div>
								<div className={styles.dates}>
									<span className={styles.label_2}>Out</span>
									<span>
										{endDate
											? endDate.toDateString()
											: "Select start date first"}
									</span>
								</div>

								<div className={sumContainer}>
									<span className={styles.label_2}>
										Summary
									</span>
									<span className={styles.sum}>
										{summary}
									</span>
								</div>
							</form>
							<div className={styles.modal_buttons}>
								<button
									onClick={cancelChanges}
									className={styles.cancel_button}
								>
									Cancel
								</button>
								<button
									onClick={handleSubmit}
									className={styles.book_button}
								>
									Book Now
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	);
};

export default NewBookingModal;
