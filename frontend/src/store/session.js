import { csrfFetch } from "./csrf.js";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const CREATED_BOOKING = "bookings/CREATED_BOOKING";
const RETRIEVED_BOOKINGS = "bookings/RETRIEVED_BOOKINGS";
const DELETED_BOOKING = "bookings/DELETED_BOOKING";

// ---------------------------------------------------------------------------
// ----------------------------- ACTION CREATORS -----------------------------
// ---------------------------------------------------------------------------

// -------------------------------  USERS  -------------------------------

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

// -----------------------------  BOOKINGS  -----------------------------

// ----------------------------- CREATE -----------------------------

const createdBooking = (booking) => ({
	type: CREATED_BOOKING,
	booking,
});

// ----------------------------- READ -----------------------------

const retrievedBookings = (bookings) => ({
	type: RETRIEVED_BOOKINGS,
	bookings,
});

// ----------------------------- DELETE -----------------------------

const deletedBooking = (deletedId) => ({
	type: DELETED_BOOKING,
	deletedId,
});

// ----------------------------------------------------------------------------
// ---------------------------------- THUNKS ----------------------------------
// ----------------------------------------------------------------------------

// -------------------------------  USERS  -------------------------------

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

// -----------------------------  BOOKINGS  -----------------------------

// ----------------------------- CREATE -----------------------------

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

// ----------------------------- READ -----------------------------

export const getMyBookings = () => async (dispatch) => {
	const res = await csrfFetch("/api/bookings/");
	if (res.ok) {
		const bookings = await res.json();
		await dispatch(retrievedBookings(Object.values(bookings)));
		return bookings;
	}
};

// ----- DELETE -----
export const deleteBooking = (id) => async (dispatch) => {
	const res = await csrfFetch(`/api/bookings/${id}`, {
		method: "DELETE",
	});
	if (res.ok) {
		const { id } = await res.json();
		await dispatch(deletedBooking(id));
		return id;
	}
};

// -----------------------------------------------------------------
// ---------------------------- REDUCER ----------------------------
// -----------------------------------------------------------------

const initialState = { user: null, bookings: {} };

function sessionReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		// ---------- USERS ----------

		case SET_USER:
			newState = Object.assign({}, state, { user: action.payload });
			return newState;

		case REMOVE_USER:
			newState = Object.assign({}, state, { user: null });
			newState.bookings = {};
			return newState;

		// ---------- BOOKINGS ----------

		// Create
		case CREATED_BOOKING:
			newState = { ...state };
			newState.bookings[action.booking.id] = action.booking;
			return newState;

		// Read
		case RETRIEVED_BOOKINGS:
			newState = { ...state };
			action.bookings.forEach(
				(booking) => (newState.bookings[booking.id] = booking)
			);
			return newState;

		// Delete
		case DELETED_BOOKING:
			newState = { ...state };
			delete newState.bookings[action.deletedId];
			return newState;

		// ---------- DEFAULT ----------
		default:
			return state;
	}
}

export default sessionReducer;
