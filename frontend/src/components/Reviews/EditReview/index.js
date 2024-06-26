import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../store/modal/actions";
import { updateReview } from "../../../store/spots/thunks";
import styles from "./EditReview.module.css";

const EditReview = ({ id, initialData }) => {
	const [content, setContent] = useState(initialData.content);
	const [rating, setRating] = useState(initialData.rating);
	const [errors, setErrors] = useState([]);
	const dispatch = useDispatch();

	console.log(initialData, "edit review initial data");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				updateReview({
					id,
					spotId: initialData.spotId,
					rating,
					content,
				})
			);
			await dispatch(hideModal());
			return;
		} catch (err) {
			console.log(err, "err?");
			const data = await err.json();
			if (data && data.errors)
				setErrors(data.errors.filter((err) => err !== "Invalid value"));
		}
	};
	return (
		<div className={styles.container}>
			<h2>Edit Review</h2>
			<div className={styles.errors}>
				{errors.length > 0 &&
					errors.map((err, idx) => <div key={idx}>{err}</div>)}
			</div>
			<form className={styles.edit_form} onSubmit={handleSubmit}>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				<div className={styles.edit_rating}>
					<label htmlFor="rating">Edit Rating</label>
					<select
						name="rating"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					>
						<option value={5}>★★★★★</option>
						<option value={4}>★★★★</option>
						<option value={3}>★★★</option>
						<option value={2}>★★</option>
						<option value={1}>★</option>
					</select>
				</div>
				<div className={styles.buttons}>
					<button type="submit">Update</button>
					<button type="button" onClick={() => dispatch(hideModal())}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditReview;
