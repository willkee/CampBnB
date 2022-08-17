import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../../store/favorites";

const FavoritesStatus = ({ spotId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFavorites(spotId));
	}, [dispatch, spotId]);
	return (
		<div>
			<div>test {spotId}</div>
		</div>
	);
};

export default FavoritesStatus;
