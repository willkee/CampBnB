import Calendar from "react-calendar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../../store/session";
import "react-calendar/dist/Calendar.css";
import styles from "./NewBooking.module.css";

const NewBookingForm = ({ spot }) => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [people, setPeople] = useState(1);
	const [errors, setErrors] = useState([]);

	const dispatch = useDispatch();

	const startDatePlusOne = new Date(startDate);
	startDatePlusOne.setDate(startDatePlusOne.getDate() + 1);

	const capacities = () => {
		const res = [];
		let i = 1;

		while (i <= spot.capacity) {
			res.push(i);
			i++;
		}
		return res;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("LOGGING");
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
						onChange={(e) => setStartDate(e)}
					/>
				</label>
				<label>
					End Date
					<Calendar
						minDate={startDatePlusOne}
						value={endDate}
						onChange={(e) => setEndDate(e)}
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
		</div>
	);
};

export default NewBookingForm;
