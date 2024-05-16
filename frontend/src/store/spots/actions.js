export const CREATED_SPOT = "spots/CREATED_SPOT";
export const RETRIEVED_SPOTS = "spots/RETRIEVED_SPOTS";
export const ONE_SPOT_RETRIEVED = "spots/ONE_SPOT_RETRIEVED";
export const UPDATED_SPOT = "spots/UPDATED_SPOT";
export const SWITCHED_OPENING = "spots/SWITCHED_OPENING";
export const DELETED_SPOT = "spots/DELETED_SPOT";

// ------------------------------------------------
// Reviews
// ------------------------------------------------

export const CREATED_REVIEW = "reviews/CREATED_REVIEW";
export const UPDATED_REVIEW = "reviews/UPDATED_REVIEW";
export const DELETED_REVIEW = "reviews/DELETED_REVIEW";

export const createdReview = (review, spotId) => ({
	type: CREATED_REVIEW,
	review,
	spotId,
});

export const updatedReview = (review, spotId) => ({
	type: UPDATED_REVIEW,
	review,
	spotId,
});

export const deletedReview = (reviewId, spotId) => ({
	type: DELETED_REVIEW,
	reviewId,
	spotId,
});

// ------------------------------------------------

export const retrievedSpots = (spots) => ({
	type: RETRIEVED_SPOTS,
	spots,
});

export const retrievedOneSpot = (spot) => ({
	type: ONE_SPOT_RETRIEVED,
	spot,
});

export const createdSpot = (payload) => ({
	type: CREATED_SPOT,
	payload,
});

export const updatedSpot = (payload) => ({
	type: UPDATED_SPOT,
	payload,
});

export const switchedOpening = (payload) => ({
	type: SWITCHED_OPENING,
	payload,
});

export const deletedSpot = (deletedId) => ({
	type: DELETED_SPOT,
	deletedId,
});
