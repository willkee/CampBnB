import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOneSpot } from "../../store/spots/thunks";
import { csrfFetch } from "../../store/csrf";
import {
	CarMirrors,
	RV,
	Tent,
	Backpack,
	MountainCity,
	Road,
	GPS,
} from "../../assets/icons";
import styles from "./SingleSpot.module.css";

const SpotMaps = ({ id, setIsLoaded, apiKey, setApiKey, spot }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const load = async () => {
			await dispatch(getOneSpot(id));
			const res = await csrfFetch("/api/google/maps");
			const data = await res.json();
			setApiKey(data.key);
			setIsLoaded(true);
		};
		load();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, id]);
	return (
		<div>
			<div className={styles.type_site_container}>
				{spot.type === "vehicle" ? (
					<div className={styles.type_info}>
						<span style={{ marginRight: "5px" }}>
							<CarMirrors />
						</span>
						<span>Car Camping Site</span>
					</div>
				) : spot.type === "rv" ? (
					<div className={styles.type_info}>
						<span style={{ marginRight: "5px" }}>
							<RV />
						</span>
						<span>RV Camping Site</span>
					</div>
				) : spot.type === "tent" ? (
					<div className={styles.type_info}>
						<span style={{ marginRight: "5px" }}>
							<Tent />
						</span>
						<span>Tent Camping Site</span>
					</div>
				) : (
					<div className={styles.type_info}>
						<span style={{ marginRight: "5px" }}>
							<Backpack />
						</span>
						<span>Backpacking Site (No Road Access)</span>
					</div>
				)}
			</div>

			<div className={styles.location_container}>
				{spot.address && (
					<div className={styles.addr}>
						<Road />
						{spot.address}
					</div>
				)}
				{spot?.lat &&
					spot?.long &&
					spot?.lat !== "NaN" &&
					spot?.long !== "NaN" && (
						<div className={styles.addr}>
							<GPS />
							{`${spot.lat}, ${spot.long}`}
						</div>
					)}
				<div>
					<MountainCity />
					{spot.city}
				</div>
			</div>
			{spot.lat && spot.long ? (
				<iframe
					title={id}
					className={styles.google_maps}
					src={`
									https://www.google.com/maps/embed/v1/place
									?key=${apiKey}
									&q=${spot.lat}%2C${spot.long}&zoom=13
								`}
				></iframe>
			) : (
				<iframe
					title={id}
					className={styles.google_maps}
					src={`
									https://www.google.com/maps/embed/v1/place
									?key=${apiKey}
									&q=${spot.address}%2C${spot.city}&zoom=13
								`}
				></iframe>
			)}
		</div>
	);
};

export default SpotMaps;
