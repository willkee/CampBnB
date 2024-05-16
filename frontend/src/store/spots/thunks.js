import {
	createdSpot,
	retrievedOneSpot,
	retrievedSpots,
	updatedSpot,
	switchedOpening,
	deletedSpot,
	createdReview,
	updatedReview,
	deletedReview,
} from "./actions";
import { csrfFetch } from "../csrf";

export const createSpot = (data) => async (dispatch) => {
	const {
		name,
		address,
		city,
		lat,
		long,
		imageUrl,
		type,
		price,
		description,
		capacity,
	} = data;

	const formData = new FormData();
	formData.append("name", name);
	formData.append("address", address);
	formData.append("city", city);
	if (lat && lat !== "0") formData.append("lat", lat);
	if (long && long !== "0") formData.append("long", long);
	formData.append("imageUrl", imageUrl);
	formData.append("type", type);
	formData.append("price", price);
	if (description) {
		formData.append("description", description);
	} else {
		formData.append("description", "");
	}
	formData.append("capacity", capacity);

	const res = await csrfFetch(`/api/spots`, {
		method: "POST",
		headers: {
			"Content-Type": "multipart/form-data",
		},
		body: formData,
	});

	if (res.ok) {
		const result = await res.json();
		await dispatch(createdSpot(result));
		return result;
	}
};

// READ ALL
// Get a list of all spots on CampBnB.
export const getAllSpots = () => async (dispatch) => {
	const res = await csrfFetch("/api/spots/");
	if (res.ok) {
		const spots = await res.json();
		await dispatch(retrievedSpots(Object.values(spots)));
		return spots;
	}
};

// READ ONE
// Get all details of one spot only.
export const getOneSpot = (id) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${id}`);
	if (res.ok) {
		const spot = await res.json();
		await dispatch(retrievedOneSpot(spot));
		return spot;
	}
};

// UPDATE ONE
// Update the details of one spot.

export const updateOneSpot = (data) => async (dispatch) => {
	const {
		name,
		address,
		city,
		lat,
		long,
		imageUrl,
		type,
		price,
		description,
		capacity,
	} = data;

	const formData = new FormData();
	formData.append("name", name);
	formData.append("address", address);
	formData.append("city", city);
	if (lat) {
		formData.append("lat", lat);
	}
	if (long) {
		formData.append("long", long);
	}
	formData.append("imageUrl", imageUrl);
	formData.append("type", type);
	formData.append("price", price);

	if (description) {
		formData.append("description", description);
	} else {
		formData.append("description", "");
	}
	formData.append("capacity", capacity);

	const res = await csrfFetch(`/api/spots/${data.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "multipart/form-data",
		},
		body: formData,
	});
	if (res.ok) {
		const update = await res.json();
		await dispatch(updatedSpot(update));
		return update;
	}
};

// UPDATE (PATCH)
// Allow owner of spot to switch from open to closed or vice versa.

export const switchOpening = (id) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${id}/switch`, {
		method: "PATCH",
		body: JSON.stringify({ id }),
	});

	if (res.ok) {
		const switched = await res.json();
		await dispatch(switchedOpening(switched));
		return switched;
	}
};

// DELETE ONE
// Delete a spot.

export const deleteSpot = (id) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${id}`, {
		method: "DELETE",
	});
	if (res.ok) {
		const { id } = await res.json();
		await dispatch(deletedSpot(id));
		return id;
	}
};

// ------------------------------------------------
// ------------------------------------------------
// REVIEWS

export const createReview = (data) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${data.spotId}/reviews`, {
		method: "POST",
		body: JSON.stringify(data),
	});

	if (res.ok) {
		const review = await res.json();
		await dispatch(createdReview(review, data.spotId));
		return review;
	}
};

export const updateReview = (data) => async (dispatch) => {
	const res = await csrfFetch(`/api/reviews/${data.id}`, {
		method: "PUT",
		body: JSON.stringify(data),
	});

	if (res.ok) {
		const update = await res.json();
		await dispatch(updatedReview(update, data.spotId));
		return update;
	}
};

export const deleteReview = (id, spotId) => async (dispatch) => {
	const res = await csrfFetch(`/api/reviews/${id}`, {
		method: "DELETE",
	});

	if (res.ok) {
		const update = await res.json();
		await dispatch(deletedReview(id, spotId));
		return update;
	}
};
