import React from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../store/modal";
import { deleteSpot } from "../../store/spots";

const DeleteConfirmation = ({ id }) => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(deleteSpot(id));
		await dispatch(hideModal());
	};

	return (
		<div>
			<h1>Are you sure you want to delete this spot?</h1>
			<button type="button" onClick={handleSubmit}>
				Delete
			</button>
			<div onClick={() => dispatch(hideModal())}>Cancel</div>
		</div>
	);
};

export default DeleteConfirmation;
