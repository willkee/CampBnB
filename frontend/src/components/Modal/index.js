import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import "./Modal.css";

import { hideModal } from "../../store/modal";

export const Modal = () => {
	const dispatch = useDispatch();

	const mount = useSelector((state) => state.modal.mount);
	const display = useSelector((state) => state.modal.display);
	const CurrentComponent = useSelector((state) => state.modal.current);

	const closeModal = () => dispatch(hideModal());

	return (
		display &&
		mount &&
		ReactDOM.createPortal(
			<div className="modal-background" onClick={closeModal}>
				<div
					className="modal-content"
					onClick={(e) => e.stopPropagation()}
				>
					<CurrentComponent />
				</div>
			</div>,
			mount
		)
	);
};

export default Modal;
