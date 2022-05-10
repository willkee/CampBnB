import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
	const { query } = useParams();
	const history = useHistory();
	const spots = useSelector((state) => state.spots);

	const matchedSpots = [];
	Object.values(spots).forEach((spot) => {
		const spotName = spot.name.toLowerCase();
		const spotCity = spot.city.toLowerCase();
		const inputQuery = query.toLowerCase();

		if (spotName.includes(inputQuery) || spotCity === inputQuery) {
			matchedSpots.push(spot);
		}
	});

	const goToSpot = (spotId) => history.push(`/spots/${spotId}`);

	return (
		<div>
			<div className={styles.search_query}>
				<span className={styles.search_for}>
					You searched for: {query}.
				</span>
				<span>
					<span>
						{matchedSpots.length > 0 ? matchedSpots.length : "No"}
					</span>{" "}
					results were found.
				</span>
			</div>
			<div>
				{matchedSpots.map((spot) => (
					<div
						onClick={() => goToSpot(spot.id)}
						className={styles.each_spot}
						key={spot.id}
					>
						<img src={spot.imageUrl} alt="spot" />
						<div>
							<h3>{spot.name}</h3>
							<div className={styles.city}>{spot.city}</div>
							<div>
								<span className={styles.price_info}>
									${spot.price}
									<span>night</span>
								</span>
								<span>
									{spot.type === "vehicle" ? (
										<i className="fa-solid fa-car-mirrors" />
									) : spot.type === "rv" ? (
										<i className="fa-solid fa-rv" />
									) : spot.type === "tent" ? (
										<i className="fa-solid fa-tent" />
									) : spot.type === "backpacking" ? (
										<i className="fa-solid fa-backpack" />
									) : (
										""
									)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchResults;
