import { csrfFetch } from "./csrf";

const CREATED_SPOT = "spots/CREATED_SPOT";
const RETRIEVED_SPOTS = "spots/RETRIEVED_SPOTS";
const ONE_SPOT_RETRIEVED = "spots/ONE_SPOT_RETRIEVED";
const UPDATED_SPOT = "spots/UPDATED_SPOT";
const SWITCHED_OPENING = "spots/SWITCHED_OPENING";
const DELETED_SPOT = "spots/DELETED_SPOT";

// ------------------------------------------------
// Reviews
// ------------------------------------------------

const CREATED_REVIEW = "reviews/CREATED_REVIEW";
const UPDATED_REVIEW = "reviews/UPDATED_REVIEW";

const createdReview = (review, spotId) => ({
	type: CREATED_REVIEW,
	review,
	spotId,
});

const updatedReview = (review, spotId) => ({
	type: UPDATED_REVIEW,
	review,
	spotId,
});

// ------------------------------------------------

const retrievedSpots = (spots) => ({
	type: RETRIEVED_SPOTS,
	spots,
});

const retrievedOneSpot = (spot) => ({
	type: ONE_SPOT_RETRIEVED,
	spot,
});

const createdSpot = (payload) => ({
	type: CREATED_SPOT,
	payload,
});

const updatedSpot = (payload) => ({
	type: UPDATED_SPOT,
	payload,
});

const switchedOpening = (payload) => ({
	type: SWITCHED_OPENING,
	payload,
});

const deletedSpot = (deletedId) => ({
	type: DELETED_SPOT,
	deletedId,
});

// CREATE
// Create a new spot.
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
	console.log(lat, long, "STORE LOG TESTING LAT LONG");
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

// ------------------------------------------------
// ------------------------------------------------

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		// CREATE
		case CREATED_SPOT: {
			newState[action.payload.id] = action.payload;
			return newState;
		}
		// READ ALL
		case RETRIEVED_SPOTS: {
			action.spots.forEach((spot) => (newState[spot.id] = spot));
			return newState;
		}
		// READ ONE
		case ONE_SPOT_RETRIEVED: {
			console.log(action.spot.Reviews, "STORE REVIEWS!");
			const obj = {};
			action.spot.Reviews.forEach((review) => {
				obj[review.id] = review;
			});
			action.spot.Reviews = obj;
			console.log(action.spot);
			newState[action.spot.id] = action.spot;
			return newState;
		}
		// UPDATE
		case UPDATED_SPOT: {
			newState[action.payload.id] = action.payload;
			return newState;
		}
		//SWITCH OPENING
		case SWITCHED_OPENING: {
			newState[action.payload.id] = action.payload;
			return newState;
		}
		// DELETE
		case DELETED_SPOT: {
			delete newState[action.deletedId];
			return newState;
		}
		// CREATE REVIEW
		case CREATED_REVIEW: {
			newState[action.spotId].Reviews[action.review.id] = action.review;
			return newState;
		}
		// UPDATE REVIEW
		case UPDATED_REVIEW: {
			newState[action.spotId].Reviews[action.review.id] = action.review;
			return newState;
		}
		default:
			return state;
	}
};

export default spotsReducer;
