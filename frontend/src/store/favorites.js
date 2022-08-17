import { csrfFetch } from "./csrf";

const RETRIEVED_FAVORITES = "reviews/RETRIEVED_FAVORITES";
const ADDED_FAVORITE = "reviews/ADDED_FAVORITE";
const DELETED_FAVORITE = "reviews/DELETED_FAVORITE";

const retrievedFavorites = (spotId, favorites) => ({
	type: RETRIEVED_FAVORITES,
	spotId,
	favorites,
});

const addedFavorite = (spotId) => ({
	type: ADDED_FAVORITE,
	spotId,
});

const deletedFavorite = (favId, spotId) => ({
	type: DELETED_FAVORITE,
	favId,
	spotId,
});

export const getFavorites = (spotId) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${spotId}/favorites`);
	console.log("test0");
	if (res.ok) {
		const favorites = await res.json();
		console.log("test1");
		await dispatch(retrievedFavorites(spotId, favorites));
		console.log("test2");
		return favorites;
	}
};

export const addFavorite = (spotId) => async (dispatch) => {
	const res = await csrfFetch(`/api/spots/${spotId}/favorites`, {
		method: "POST",
		body: JSON.stringify(spotId),
	});

	if (res.ok) {
		const favorite = await res.json();
		await dispatch(addedFavorite(spotId));
		return favorite;
	}
};

export const removeFavorite = (favId, spotId) => async (dispatch) => {
	const res = await csrfFetch(`/api/favorites/${favId}`, {
		method: "DELETE",
	});

	if (res.ok) {
		const update = await res.json();
		await dispatch(deletedFavorite(favId, spotId));
		return update;
	}
};

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_FAVORITES: {
			console.log(action, "action \n\n\n\n\n\n");
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
