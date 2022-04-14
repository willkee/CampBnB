import { csrfFetch } from "./csrf";

const RETRIEVED_BOOKINGS = "bookings/RETRIEVED_BOOKINGS";

const retrievedBookings = (bookings) => ({
	type: RETRIEVED_BOOKINGS,
	bookings,
});

// READ ALL
// Get a list of all bookings for current session user.
export const getMyBookings = () => async (dispatch) => {
	const res = await csrfFetch("/api/bookings/");
	if (res.ok) {
		const bookings = await res.json();
		await dispatch(retrievedBookings(Object.values(bookings)));
		return bookings;
	}
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_BOOKINGS: {
			action.bookings.forEach(
				(booking) => (newState[booking.id] = booking)
			);
			return newState;
		}
		default:
			return state;
	}
};

export default bookingsReducer;
