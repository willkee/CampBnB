import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../../store/favorites";
import styles from "./FavoritesStatus.module.css";

const FavoritesStatus = ({ spotId }) => {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	const favorites = useSelector((state) => state.favorites);

	console.log(favorites[spotId], "fDJFHKSHFKJDSHF");

	useEffect(() => {
		dispatch(getFavorites(spotId)).then(() => setLoaded(true));
	}, [dispatch, spotId]);
	return (
		<div>
			{loaded && (
				<div className={styles.container}>
					<i id={styles.heart_clear} className="fa-light fa-heart" />
					<span>{favorites[spotId].length}</span>
				</div>
			)}
		</div>
	);
};

export default FavoritesStatus;
