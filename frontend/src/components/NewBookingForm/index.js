import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

	const dispatch = useDispatch();

	const startDatePlusOne = new Date(startDate);
	startDatePlusOne.setDate(startDatePlusOne.getDate() + 1);

	useEffect(() => {
		const bookings = [];
		if (spot) {
			spot.Bookings.forEach((booking) => {
				if (new Date(booking.endDate) > new Date()) {
					bookings.push([booking.startDate, booking.endDate]);
				}
			});
		}
		setExistingBookings(bookings);
		setLoaded(true);
	}, [spot]);

	const capacities = () => {
		const res = [];
		let i = 1;

		while (i <= spot.capacity) {
			res.push(i);
			i++;
		}
		return res;
	};

	const tileDisabledStart = ({ date, view }) => {
		if (view === "month") {
			return false;
		}
	};

	const tileDisabledEnd = ({ date, view }) => {
		if (view === "month") {
			if (!startDate) {
				return true;
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await dispatch(
				createBooking(spot.id, {
					spotId: spot.id,
					startDate,
					endDate,
					people,
				})
			);
		} catch (err) {
			const data = await err.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};

	return (
		<div>
			{loaded && (
				<>
					<div>Make A Booking</div>
					{errors.length > 0 && (
						<div className={styles.error_container}>
							{errors.map((error, idx) => (
								<div key={idx}>{error}</div>
							))}
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<label>
							Start Date
							<Calendar
								minDate={new Date()}
								value={startDate}
								onChange={(e) => {
									setStartDate(e);
									setEndDate(
										new Date(
											new Date(e).setDate(e.getDate() + 1)
										)
									);
								}}
								tileDisabled={tileDisabledStart}
							/>
						</label>
						<label>
							End Date
							<Calendar
								minDate={startDatePlusOne}
								value={endDate}
								onChange={(e) => setEndDate(e)}
								tileDisabled={tileDisabledEnd}
							/>
						</label>
						<div>
							<label>
								Number of people
								<select
									value={people}
									onChange={(e) => setPeople(e.target.value)}
								>
									{capacities().map((cap) => (
										<option key={cap} value={cap}>
											{cap}
										</option>
									))}
								</select>
							</label>
						</div>
						<div>{startDate && startDate.toDateString()}</div>
						<div>{endDate && endDate.toDateString()}</div>
						<div>{people}</div>
						<button type="submit">Book</button>
					</form>
				</>
			)}
		</div>
	);
};

export default NewBookingForm;
