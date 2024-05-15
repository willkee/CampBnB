import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import "./Modal.css";

import EditReview from "../Reviews/EditReview";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import SearchInput from "../Search/Input";
import EditPeople from "../ProfilePage/Bookings/Utils/EditPeople";
import ConfirmCancel from "../ProfilePage/Bookings/Utils/ConfirmCancel";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import AboutModal from "../SplashPage/AboutModal";
import LogoutConfirmation from "../SplashPage/LogoutConfirmation";

import { hideModal } from "../../store/modal/actions";

const MODAL_COMPONENTS = {
	EDIT_REVIEW: EditReview,
	SIGN_UP_FORM: SignUpForm,
	LOGIN_FORM: LoginForm,
	SEARCH_INPUT: SearchInput,
	EDIT_PEOPLE: EditPeople,
	CONFIRM_CANCEL: ConfirmCancel,
	EDIT_SPOT_FORM: EditSpotForm,
	DELETE_CONFIRMATION: DeleteConfirmation,
	ABOUT_MODAL: AboutModal,
	LOGOUT_CONFIRMATION: LogoutConfirmation,
};

export const Modal = () => {
	const dispatch = useDispatch();

	const isVisible = useSelector((state) => state.modal.visible);
	const CurrentModal = useSelector((state) => state.modal.currentModal);
	const ModalComponent = MODAL_COMPONENTS[CurrentModal];

	if (!ModalComponent) return null;

	return (
		isVisible &&
		ReactDOM.createPortal(
			<div
				className="modal-background"
				onClick={() => dispatch(hideModal())}
			>
				<div
					className="modal-content"
					onClick={(e) => e.stopPropagation()}
				>
					<ModalComponent />
				</div>
			</div>,
			document.body
		)
	);
};

export default Modal;
