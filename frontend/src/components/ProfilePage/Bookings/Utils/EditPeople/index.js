import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../store/modal/actions";
import { updatePeopleInBooking } from "../../../../../store/session/thunks";
import styles from "./EditPeople.module.css";

import {
	PersonCircleMinus,
	PersonCirclePlus,
} from "../../../../../assets/icons";

const EditPeople = ({ id, initialData }) => {
	const dispatch = useDispatch();
	const [people, setPeople] = useState(initialData.people);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		loader();

		return () => setPeople();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loader = () => {
		setPeople(initialData.people);
		setErrors([]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				updatePeopleInBooking(id, initialData.spotId, people)
			);
			await dispatch(hideModal());
		} catch (e) {
			const data = await e.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};

	const decrement = () => (people > 1 ? setPeople(people - 1) : setPeople(1));
	const increment = () =>
		people < initialData.Spot.capacity
			? setPeople(people + 1)
			: setPeople(initialData.Spot.capacity);

	return (
		<div className={styles.edit_container}>
			<div className={styles.heading}>
				You are editing the number of people for the following booking:
			</div>
			{errors.length > 0 && (
				<div className={styles.error_container}>
					{errors.map((err, idx) => (
						<div key={idx}>{err}</div>
					))}
				</div>
			)}
			<h2>{initialData.Spot.name}</h2>
			<div className={styles.cap}>
				Maximum Capacity: {initialData.Spot.capacity} People
			</div>
			<div className={styles.changer}>
				<button
					type="button"
					onClick={decrement}
					className={people > 1 ? styles.dec : styles.disable}
				>
					<PersonCircleMinus />
				</button>
				<div>{people}</div>
				<button
					type="button"
					onClick={increment}
					className={
						people < initialData.Spot.capacity
							? styles.inc
							: styles.disable
					}
				>
					<PersonCirclePlus />
				</button>
			</div>
			<div className={styles.buttons}>
				<button type="button" onClick={handleSubmit}>
					Change
				</button>
				<button type="button" onClick={() => dispatch(hideModal())}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default EditPeople;
