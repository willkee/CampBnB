import { csrfFetch } from "./csrf.js";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const CREATED_BOOKING = "bookings/CREATED_BOOKING";
const RETRIEVED_BOOKINGS = "bookings/RETRIEVED_BOOKINGS";

// USER INFO
const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

// BOOKING INFO
const createdBooking = (booking) => ({
	type: CREATED_BOOKING,
	booking,
});

const retrievedBookings = (bookings) => ({
	type: RETRIEVED_BOOKINGS,
	bookings,
});

export const login = (email, password) => async (dispatch) => {
	const response = await csrfFetch("/api/session", {
		method: "POST",
		body: JSON.stringify({ email, password }),
	});
	const data = await response.json();
	dispatch(setUser(data.user));
	return response;
};

export const restoreUser = () => async (dispatch) => {
	const response = await csrfFetch("/api/session");
	const data = await response.json();
	dispatch(setUser(data.user));
	return response;
};

export const signup = (user) => async (dispatch) => {
	const { firstName, lastName, email, password, confirmPassword } = user;
	const response = await csrfFetch("/api/users", {
		method: "POST",
		body: JSON.stringify({
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		}),
	});
	const data = await response.json();
	dispatch(setUser(data.user));
	return response;
};

export const logout = () => async (dispatch) => {
	const response = await csrfFetch("/api/session", {
		method: "DELETE",
	});
	dispatch(removeUser());
	return response;
};

// BOOKINGS

// CREATE
export const createBooking = (spotId, data) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${spotId}/book`, {
		method: "POST",
		body: JSON.stringify(data),
	});

	if (res.ok) {
		const booking = await res.json();
		await dispatch(createdBooking(booking));
		return booking;
	}
};

// READ
export const getMyBookings = () => async (dispatch) => {
	const res = await csrfFetch("/api/bookings/");
	if (res.ok) {
		const bookings = await res.json();
		await dispatch(retrievedBookings(Object.values(bookings)));
		return bookings;
	}
};

const initialState = { user: null, bookings: {} };

function sessionReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case SET_USER:
			newState = Object.assign({}, state, { user: action.payload });
			return newState;
		case REMOVE_USER:
			newState = Object.assign({}, state, { user: null });
			newState.bookings = {};
			return newState;
		case CREATED_BOOKING:
			newState = { ...state };
			newState.bookings[action.booking.id] = action.booking;
			return newState;
		case RETRIEVED_BOOKINGS:
			newState = { ...state };
			action.bookings.forEach(
				(booking) => (newState.bookings[booking.id] = booking)
			);
			return newState;
		default:
			return state;
	}
}

export default sessionReducer;
