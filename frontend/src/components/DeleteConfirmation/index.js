import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { hideModal } from "../../store/modal";
import { deleteSpot } from "../../store/spots";

import styles from "./DeleteSpot.module.css";

const DeleteConfirmation = ({ id }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(deleteSpot(id));
		await dispatch(hideModal());
		return history.push("/main");
	};

	return (
		<div className={styles.container}>
			<h1>Are you sure you want to delete this spot?</h1>
			<div className={styles.buttons}>
				<button type="button" onClick={handleSubmit}>
					Delete
				</button>
				<button type="button" onClick={() => dispatch(hideModal())}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default DeleteConfirmation;
