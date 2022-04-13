import { csrfFetch } from "./csrf";

const CREATED_SPOT = "spots/CREATED_SPOT";
const RETRIEVED_SPOTS = "spots/RETRIEVED_SPOTS";
// const ONE_SPOT_RETRIEVED = "spots/ONE_SPOT_RETRIEVED";
const UPDATED_SPOT = "spots/UPDATED_SPOT";
// const DELETED_SPOT = "spots/DELETED_SPOT";

const retrievedSpots = (spots) => ({
	type: RETRIEVED_SPOTS,
	spots,
});

const createdSpot = (payload) => ({
	type: CREATED_SPOT,
	payload,
});

const updatedSpot = (payload) => ({
	type: UPDATED_SPOT,
	payload,
});

// CREATE
// Create a new spot.
export const createSpot = (data) => async (dispatch) => {
	const res = await csrfFetch("/api/spots/", {
		method: "POST",
		body: JSON.stringify(data),
	});
	if (res.ok) {
		const result = res.json();
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

// export const getOneSpot = () => async (dispatch) => {

// }

// UPDATE ONE
// Update the details of one spot.

export const updateOneSpot = (data) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${data.id}`, {
		method: "PUT",
		body: JSON.stringify(data),
	});
	if (res.ok) {
		const update = await res.json();
		await dispatch(updatedSpot(update));
		return update;
	}
};

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
			action.spots[0].forEach((spot) => {
				newState[spot.id] = spot;
			});
			return newState;
		}
		// UPDATE
		case UPDATED_SPOT: {
			newState[action.payload.id] = action.payload;
			return newState;
		}
		default:
			return state;
	}
};

export default spotsReducer;
