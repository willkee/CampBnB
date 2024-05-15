import { createSelector } from "@reduxjs/toolkit";

const selectSpots = (state) => state.spots;

export const selectSpotsList = createSelector([selectSpots], (spots) =>
	Object.values(spots)
);
