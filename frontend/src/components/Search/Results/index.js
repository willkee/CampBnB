import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResults.module.css";

import { CarMirrors, RV, Tent, Backpack } from "../../../assets/icons";
const SearchResults = () => {
	const { query } = useParams();
	const navigate = useNavigate();
	const spots = useSelector((state) => state.spots);

	const matchedSpots = [];
	Object.values(spots).forEach((spot) => {
		const spotName = spot.name.toLowerCase();
		const spotCity = spot.city.toLowerCase();
		const inputQuery = decodeURIComponent(query).toLowerCase();

		if (spotName.includes(inputQuery) || spotCity === inputQuery) {
			matchedSpots.push(spot);
		}
	});

	const goHome = () => navigate("/main");

	const goToSpot = (spotId) => navigate(`/spots/${spotId}`);

	return (
		<div className={styles.outer_container}>
			<div className={styles.search_query}>
				<span className={styles.search_for}>
					You searched for: {decodeURIComponent(query)}.
				</span>
				<span>
					<span>
						{matchedSpots.length > 0 ? matchedSpots.length : "No"}
					</span>{" "}
					{matchedSpots.length === 1
						? "result was found."
						: "results were found."}
				</span>
			</div>
			<button
				type="button"
				onClick={goHome}
				className={styles.return_home}
			>
				Return Home
			</button>
			<div>
				{matchedSpots.map((spot) => (
					<div
						onClick={() => goToSpot(spot.id)}
						className={styles.each_spot}
						key={spot.id}
					>
						<img src={spot.imageUrl} alt="spot" />
						<div>
							<h3 className={styles.spot_name}>
								{spot.name.length > 70
									? spot.name.slice(0, 70) + "..."
									: spot.name}
							</h3>
							<div className={styles.city}>{spot.city}</div>
							<div>
								<span className={styles.price_info}>
									${spot.price}
									<span>night</span>
								</span>
								<span>
									{spot.type === "vehicle" ? (
										<CarMirrors />
									) : spot.type === "rv" ? (
										<RV />
									) : spot.type === "tent" ? (
										<Tent />
									) : spot.type === "backpacking" ? (
										<Backpack />
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
