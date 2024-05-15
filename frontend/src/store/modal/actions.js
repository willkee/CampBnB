export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SET_CURRENT_MODAL = "SET_MODAL_TYPE";

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });

export const setCurrentModal = (component) => ({
	type: SET_CURRENT_MODAL,
	payload: component,
});
