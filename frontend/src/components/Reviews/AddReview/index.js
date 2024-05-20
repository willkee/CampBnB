import { useState } from "react";
import { useDispatch } from "react-redux";

import { createReview } from "../../../store/spots/thunks";
import styles from "./AddReview.module.css";

const AddReview = ({ spotId }) => {
	const [content, setContent] = useState("");
	const [rating, setRating] = useState(0);
	const [errors, setErrors] = useState([]);
	const dispatch = useDispatch();

	const submitReview = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				createReview({
					spotId,
					rating,
					content: content.trim(),
				})
			);
			setContent("");
			setRating(0);
			return;
		} catch (res) {
			const data = await res.json();
			if (data && data.errors) {
				setErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
			}
		}
	};

	const clear = () => {
		setContent("");
		setRating(0);
		setErrors([]);
	};

	return (
		<div className={styles.add_review_container}>
			<h4>Add Your Review</h4>
			{errors.length > 0 && (
				<div className={styles.error_container}>
					{errors.map((error, idx) => (
						<div key={idx}>{error}</div>
					))}
				</div>
			)}
			<form onSubmit={submitReview}>
				<textarea
					type="text"
					className={styles.add_review_text}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				<section>
					<select
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					>
						<option value={0} disabled>
							Rating
						</option>
						<option value={5}>★★★★★</option>
						<option value={4}>★★★★</option>
						<option value={3}>★★★</option>
						<option value={2}>★★</option>
						<option value={1}>★</option>
					</select>
					<button className={styles.post} type="submit">
						Post
					</button>
					<button
						className={styles.clear}
						type="button"
						onClick={clear}
					>
						Clear
					</button>
				</section>
			</form>
		</div>
	);
};

export default AddReview;
