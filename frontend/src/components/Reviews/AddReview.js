import { useState } from "react";
import styles from "./Reviews.module.css";

const AddReview = () => {
	const [content, setContent] = useState("");
	const [rating, setRating] = useState("");

	const clear = () => {
		setContent("");
	};

	return (
		<div className={styles.add_review_container}>
			<h4>Add Your Review</h4>
			<form>
				<textarea
					type="text"
					className={styles.add_review_text}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				<section>
					<select
						defaultValue={""}
						onChange={(e) => setRating(e.target.value)}
					>
						<option disabled value={""}>
							Select Rating
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
