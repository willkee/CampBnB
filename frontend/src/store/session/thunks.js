import { csrfFetch } from "../csrf";
import {
	setUser,
	updatedUserNames,
	updatedUserEmail,
	removeUser,
	updatedPeopleForBooking,
	createdBooking,
	retrievedBookings,
	deletedBooking,
} from "./actions";

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

export const getMyBookings = () => async (dispatch) => {
	const res = await csrfFetch("/api/bookings/");
	if (res.ok) {
		const bookings = await res.json();
		await dispatch(retrievedBookings(Object.values(bookings)));
		return bookings;
	}
};

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
