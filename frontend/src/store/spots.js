import { csrfFetch } from "./csrf";

const RETRIEVED_SPOTS = "spots/RETRIEVED_SPOTS";

const retrievedSpots = (spots) => ({
	type: RETRIEVED_SPOTS,
	spots,
});

export const getAllSpots = () => async (dispatch) => {
	const res = await csrfFetch("/api/spots/");
	if (res.ok) {
		const spots = await res.json();
		await dispatch(retrievedSpots(Object.values(spots)));
		return spots;
	}
};

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
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
