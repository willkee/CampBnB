import { produce } from "immer";
import {
	SET_USER,
	REMOVE_USER,
	UPDATED_USER_NAMES,
	UPDATED_USER_EMAIL,
	UPDATED_PEOPLE_FOR_BOOKING,
	CREATED_BOOKING,
	RETRIEVED_BOOKINGS,
	DELETED_BOOKING,
} from "./actions";

const initialState = { user: null, bookings: {} };

function sessionReducer(state = initialState, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case SET_USER:
				draft.user = action.payload;
				break;
			case REMOVE_USER:
				draft.user = null;
				draft.bookings = {};
				break;
			case UPDATED_USER_NAMES:
				if (draft.user) {
					draft.user.firstName = action.data.firstName;
					draft.user.lastName = action.data.lastName;
				}
				break;
			case UPDATED_USER_EMAIL:
				if (draft.user) {
					draft.user.email = action.email;
				}
				break;
			case CREATED_BOOKING:
				draft.bookings[action.booking.id] = action.booking;
				break;
			case RETRIEVED_BOOKINGS:
				draft.bookings = {};
				action.bookings.forEach((book) => {
					draft.bookings[book.id] = book;
				});
				break;
			case UPDATED_PEOPLE_FOR_BOOKING:
				if (draft.bookings[action.booking.id]) {
					draft.bookings[action.booking.id].people =
						action.booking.people;
				}
				break;
			case DELETED_BOOKING:
				delete draft.bookings[action.deletedId];
				break;

			default:
				break;
		}
	});
}

export default sessionReducer;
