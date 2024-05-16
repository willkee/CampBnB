import { SHOW_MODAL, HIDE_MODAL, SET_CURRENT_MODAL } from "./actions";

const initialState = { visible: false, currentModal: null, modalProps: {} };

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...state, visible: true };
		case HIDE_MODAL:
			return { ...state, visible: false };
		case SET_CURRENT_MODAL:
			return {
				...state,
				currentModal: action.payload.componentId,
				modalProps: action.payload.modalProps,
			};
		default:
			return state;
	}
};

export default modalReducer;
