import { useDispatch } from "react-redux";
import { hideModal } from "../../../store/modal";
import { deleteReview } from "../../../store/spots";
import styles from "./DeleteReview.module.css";

const DeleteReview = ({ id, spotId }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteReview(id, spotId)).then(() => dispatch(hideModal()));
	};

	return (
		<div className={styles.container}>
			<h2>Are you sure you wish to delete this review?</h2>
			<div className={styles.buttons}>
				<button type="submit" onClick={handleDelete}>
					Delete
				</button>
				<button type="button" onClick={() => dispatch(hideModal())}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default DeleteReview;
