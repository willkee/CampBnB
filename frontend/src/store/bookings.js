// import { csrfFetch } from "./csrf";

// const CREATED_BOOKING = "bookings/CREATED_BOOKING";

// const createdBooking = (booking) => ({
// 	type: CREATED_BOOKING,
// 	booking,
// });

// export const createBooking = (data) => async (dispatch) => {
// 	const res = await csrfFetch("/api/spots/:spotId/book", {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 	});

// 	if (res.ok) {
// 		const booking = await res.json();
// 		await dispatch(createdBooking(booking));
// 		return booking;
// 	}
// };

// const bookingsReducer = (state = {}, action) => {
// 	const newState = { ...state };
// 	switch (action.type) {
// 		case CREATED_BOOKING: {
// 			newState[action.booking.id] = action.booking;
// 			return newState;
// 		}
// 		default:
// 			return state;
// 	}
// };

// export default bookingsReducer;
