import { csrfFetch } from "./csrf.js";

const SET_USER = "session/setUser";
const UPDATED_USER_NAMES = "session/updateUserNames";
const UPDATED_USER_EMAIL = "session/updateUserEmail";
const REMOVE_USER = "session/removeUser";

const CREATED_BOOKING = "bookings/CREATED_BOOKING";
const RETRIEVED_BOOKINGS = "bookings/RETRIEVED_BOOKINGS";
const UPDATED_PEOPLE_FOR_BOOKING = "bookings/UPDATED_PEOPLE_FOR_BOOKING";
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

const updatedUserNames = (data) => ({
	type: UPDATED_USER_NAMES,
	data,
});

const updatedUserEmail = (email) => ({
	type: UPDATED_USER_EMAIL,
	email,
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

const updatedPeopleForBooking = (booking) => ({
	type: UPDATED_PEOPLE_FOR_BOOKING,
	booking,
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

export const updateUserNames = (user) => async (dispatch) => {
	const res = await csrfFetch(`/api/users/${user.id}`, {
		method: "PUT",
		body: JSON.stringify(user),
	});
	if (res.ok) {
		const userData = await res.json();
		await dispatch(updatedUserNames(userData));
		return userData;
	}
};

export const updateUserEmail = (id, email) => async (dispatch) => {
	const res = await csrfFetch(`/api/users/${id}/email`, {
		method: "PUT",
		body: JSON.stringify({ id, email }),
	});
	if (res.ok) {
		const { email } = await res.json();
		await dispatch(updatedUserEmail(email));
		return email;
	}
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

// ----- UPDATE -----

export const updatePeopleInBooking =
	(id, spotId, people) => async (dispatch) => {
		const res = await csrfFetch(`/api/bookings/${id}`, {
			method: "PATCH",
			body: JSON.stringify({ id, spotId, people }),
		});
		if (res.ok) {
			const data = await res.json();
			await dispatch(updatedPeopleForBooking(data));
			return data;
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

		case UPDATED_USER_NAMES:
			newState = { ...state };
			newState.user.firstName = action.data.firstName;
			newState.user.lastName = action.data.lastName;
			return newState;

		case UPDATED_USER_EMAIL:
			newState = { ...state };
			newState.user.email = action.email;
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

		// Update
		case UPDATED_PEOPLE_FOR_BOOKING:
			const bookings = { ...state.bookings };
			bookings[action.booking.id] = action.booking;
			return { ...state, bookings };

		// Delete
		case DELETED_BOOKING:
			const oldBookings = { ...state.bookings };
			delete oldBookings[action.deletedId];
			return { ...state, bookings: oldBookings };

		// ---------- DEFAULT ----------
		default:
			return state;
	}
}

export default sessionReducer;
