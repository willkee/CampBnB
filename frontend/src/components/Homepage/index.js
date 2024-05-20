import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots/thunks";
import { GrMapLocation } from "react-icons/gr";
import {
	getTypeIcon,
	processName,
	processCity,
	ImageHandler,
} from "./HelperFunctions";
import styles from "./Homepage.module.css";

const Homepage = ({ spots }) => {
	const [loaded, setLoaded] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const spotsOpen = spots.filter((spot) => spot.open);
	const spotsClosed = spots.filter((spot) => !spot.open);

	useEffect(() => {
		dispatch(getAllSpots()).then(() => setLoaded(true));
		return () => setLoaded(false);
	}, [dispatch]);

	const sendToSpot = (id) => navigate(`/spots/${id}`);

	if (!loaded) return <div className={styles.outer_container} />;

	return (
		<div className={styles.outer_container}>
			<div className={styles.container}>
				{spotsOpen.map((spot) => (
					<div
						key={spot.id}
						className={styles.each_spot_container}
						onClick={() => sendToSpot(spot.id)}
					>
						<div className={styles.img_container}>
							<ImageHandler img={spot.imageUrl} />
							<div className={styles.img_overlay_open}>
								<div className={styles.o1}>
									<span className={styles.dollar}>$</span>
									<span className={styles.price_overlay}>
										{spot.price}
									</span>
									<span className={styles.nt}>/nt</span>
								</div>
							</div>
						</div>
						<div className={styles.desc_container}>
							<div>
								<h4>{processName(spot.name)}</h4>
								<div className={styles.city_info}>
									<GrMapLocation />
									<span>{processCity(spot.city)}</span>
								</div>
							</div>
							<div className={styles.desc_type_icon}>
								{getTypeIcon(spot.type)}
							</div>
						</div>
					</div>
				))}
				{spotsClosed.map((spot) => (
					<div
						key={spot.id}
						className={styles.each_spot_container}
						onClick={() => sendToSpot(spot.id)}
					>
						<div className={styles.img_container}>
							<ImageHandler img={spot.imageUrl} />
							<div className={styles.img_overlay_closed}>
								Not Accepting New Bookings
							</div>
						</div>
						<h4>{processName(spot.name)}</h4>
						<div className={styles.city_info}>
							<GrMapLocation />
							<span>{processCity(spot.city)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;
