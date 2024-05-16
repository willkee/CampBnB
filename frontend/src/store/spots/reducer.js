import { produce } from "immer";

import {
	CREATED_SPOT,
	RETRIEVED_SPOTS,
	ONE_SPOT_RETRIEVED,
	UPDATED_SPOT,
	SWITCHED_OPENING,
	DELETED_SPOT,
	CREATED_REVIEW,
	UPDATED_REVIEW,
	DELETED_REVIEW,
} from "./actions";

const initialState = {};

const spotsReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case CREATED_SPOT:
				draft[action.payload.id] = action.payload;
				break;
			case RETRIEVED_SPOTS:
				action.spots.forEach((spot) => (draft[spot.id] = spot));
				break;
			case ONE_SPOT_RETRIEVED:
				const reviews = {};
				action.spot.Reviews.forEach((r) => (reviews[r.id] = r));
				draft[action.spot.id] = { ...action.spot, Reviews: reviews };
				break;
			case UPDATED_SPOT:
				draft[action.payload.id] = {
					...draft[action.payload.id],
					...action.payload,
				};
				break;
			case SWITCHED_OPENING:
				draft[action.payload.id] = action.payload;
				break;
			case DELETED_SPOT:
				delete draft[action.deletedId];
				break;
			case CREATED_REVIEW:
				if (!draft[action.spotId].Reviews) {
					draft[action.spotId].Reviews = {};
				}
				draft[action.spotId].Reviews[action.review.id] = action.review;
				break;
			case UPDATED_REVIEW:
				draft[action.spotId].Reviews[action.review.id] = action.review;
				break;
			case DELETED_REVIEW:
				delete draft[action.spotId].Reviews[action.reviewId];
				break;
			default:
				return state;
		}
	});
};

export default spotsReducer;
