import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllSpots } from "../../../store/spots";
import styles from "./MySpots.module.css";

const MySpots = () => {
	const [loaded, setLoaded] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);
	const mySpots = useSelector((state) => Object.values(state.spots)).filter(
		(spot) => spot.ownerId === sessionUser.id
	);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getAllSpots()).then(() => setLoaded(true));
	}, [dispatch]);

	return (
		<div>
			<h2>My Spots</h2>
			{loaded && (
				<div className={styles.spots_container}>
					{mySpots.map((spot) => (
						<div
							key={spot.id}
							className={styles.my_each_spot}
							onClick={() => history.push(`/spots/${spot.id}`)}
						>
							<img
								src={spot.imageUrl}
								alt="spot"
								onError={(e) => {
									e.onerror = null;
									e.target.src =
										"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
								}}
							></img>
							<div className={styles.spot_info}>
								<h3>{spot.name}</h3>
								<div>{spot.city}</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MySpots;
