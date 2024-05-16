import {
	RETRIEVED_FAVORITES,
	ADDED_FAVORITE,
	DELETED_FAVORITE,
} from "./actions";

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_FAVORITES: {
			newState[action.spotId] = action.favorites;
			return newState;
		}
		case ADDED_FAVORITE: {
			return newState;
		}
		case DELETED_FAVORITE: {
			return newState;
		}
		default:
			return state;
	}
};

export default favoriteReducer;
