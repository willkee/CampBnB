import { csrfFetch } from "./csrf";

const RETRIEVED_SPOTS = "spots/RETRIEVED_SPOTS";
const CREATED_SPOT = "spots/CREATED_SPOT";

const retrievedSpots = (spots) => ({
	type: RETRIEVED_SPOTS,
	spots,
});

const createdSpot = (payload) => ({
	type: CREATED_SPOT,
	payload,
});

// Get a list of all spots on CampBnB
export const getAllSpots = () => async (dispatch) => {
	const res = await csrfFetch("/api/spots/");
	if (res.ok) {
		const spots = await res.json();
		await dispatch(retrievedSpots(Object.values(spots)));
		return spots;
	}
};

// Create a new spot
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

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		// CREATE
		case CREATED_SPOT: {
			newState[action.payload.id] = action.payload;
			return newState;
		}
		// READ
		case RETRIEVED_SPOTS: {
			action.spots[0].forEach((spot) => {
				newState[spot.id] = spot;
			});
			return newState;
		}
		default:
			return state;
	}
};

export default spotsReducer;
