// import { csrfFetch } from "./csrf";

// const CREATED_REVIEW = "bookings/CREATED_REVIEW";

// const createdReview = (review) => ({
// 	type: CREATED_REVIEW,
// 	review,
// });

// export const createReview = (data) => async (dispatch) => {
// 	const res = await csrfFetch(`/api/spots/${data.spotId}/reviews`, {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 	});

// 	if (res.ok) {
// 		const review = await res.json();
// 		await dispatch(createdReview(review));
// 		return review;
// 	}
// };

// const reviewsReducer = (state = {}, action) => {
// 	const newState = { ...state };
// 	switch (action.type) {
// 		case CREATED_REVIEW: {
// 			newState[action.review.id] = action.review;
// 			return newState;
// 		}
// 		default:
// 			return state;
// 	}
// };

// export default reviewsReducer;
