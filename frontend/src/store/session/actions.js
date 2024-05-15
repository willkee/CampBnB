export const SET_USER = "session/setUser";
export const UPDATED_USER_NAMES = "session/updateUserNames";
export const UPDATED_USER_EMAIL = "session/updateUserEmail";
export const REMOVE_USER = "session/removeUser";

export const CREATED_BOOKING = "bookings/CREATED_BOOKING";
export const RETRIEVED_BOOKINGS = "bookings/RETRIEVED_BOOKINGS";
export const UPDATED_PEOPLE_FOR_BOOKING = "bookings/UPDATED_PEOPLE_FOR_BOOKING";
export const DELETED_BOOKING = "bookings/DELETED_BOOKING";

export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

export const removeUser = () => ({
	type: REMOVE_USER,
});

export const updatedUserNames = (data) => ({
	type: UPDATED_USER_NAMES,
	data,
});

export const updatedUserEmail = (email) => ({
	type: UPDATED_USER_EMAIL,
	email,
});

export const createdBooking = (booking) => ({
	type: CREATED_BOOKING,
	booking,
});

export const retrievedBookings = (bookings) => ({
	type: RETRIEVED_BOOKINGS,
	bookings,
});

export const updatedPeopleForBooking = (booking) => ({
	type: UPDATED_PEOPLE_FOR_BOOKING,
	booking,
});

export const deletedBooking = (deletedId) => ({
	type: DELETED_BOOKING,
	deletedId,
});
