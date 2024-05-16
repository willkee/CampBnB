import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

import EditReview from "../Reviews/EditReview";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import SearchInput from "../Search/Input";
import EditPeople from "../ProfilePage/Bookings/Utils/EditPeople";
import ConfirmCancel from "../ProfilePage/Bookings/Utils/ConfirmCancel";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import AboutModal from "./About/About";
import LogoutConfirmation from "../SplashPage/LogoutConfirmation";
import SignOut from "./SignOut/SignOut";

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
	CONFIRM_SIGN_OUT: SignOut,
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
				className={styles.overlay}
				onClick={() => dispatch(hideModal())}
			>
				<div
					className={styles.content}
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
