import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import styles from "./Homepage.module.css";
import {
	MountainCity,
	CarMirrors,
	RV,
	Tent,
	Backpack,
} from "../../assets/icons";

const Homepage = ({ spots }) => {
	const [loaded, setLoaded] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);
	// const spots = useSelector((state) => Object.values(state.spots));

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const spotsOpen = spots.filter((spot) => spot.open);
	const spotsClosed = spots.filter((spot) => !spot.open);

	useEffect(() => {
		const loader = async () => {
			await dispatch(getAllSpots());
			setLoaded(true);
		};
		loader();

		return () => setLoaded(false);
	}, [dispatch]);

	const sendToSpot = (id) => navigate(`/spots/${id}`);

	return (
		<div className={styles.outer_container}>
			{loaded && (
				<>
					{/* {sessionUser ? (
						<h1
							className={styles.h1_element}
						>{`Welcome back, ${sessionUser.firstName}!`}</h1>
					) : (
						<h1 className={styles.h1_element}>
							Welcome to CampBnB!
						</h1>
					)} */}
					<div className={styles.container}>
						{spotsOpen.map((spot) => (
							<div
								key={spot.id}
								className={styles.each_spot_container}
								onClick={() => sendToSpot(spot.id)}
							>
								<div className={styles.img_container}>
									<img
										src={spot.imageUrl}
										alt="spot"
										width="100px"
										onError={(e) => {
											e.onerror = null;
											e.target.src =
												"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
										}}
									/>
									{!spot.open && (
										<div
											className={styles.img_overlay_grid}
										>
											Not Accepting New Bookings
										</div>
									)}
								</div>
								<div className={styles.desc_container}>
									<div>
										<h4>
											{spot.name.length > 20
												? spot.name.slice(0, 20) + "..."
												: spot.name}
										</h4>
										<div className={styles.city_info}>
											<MountainCity />
											{spot?.city?.length > 20
												? spot?.city?.slice(0, 20) +
												  "..."
												: spot?.city}
										</div>
										<div className={styles.price_type}>
											<div>
												<span>${spot.price}</span>
												<span>night</span>
											</div>
										</div>
									</div>
									<div className={styles.desc_type_icon}>
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
									<img
										src={spot.imageUrl}
										alt="spot"
										width="100px"
										onError={(e) => {
											e.onerror = null;
											e.target.src =
												"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
										}}
									/>
									{!spot.open && (
										<div
											className={styles.img_overlay_grid}
										>
											Not Accepting New Bookings
										</div>
									)}
								</div>
								<h4>
									{spot?.name?.length > 20
										? spot?.name?.slice(0, 20) + "..."
										: spot?.name}
								</h4>
								<div className={styles.city_info}>
									<MountainCity />
									{spot?.city?.length > 20
										? spot?.city?.slice(0, 20) + "..."
										: spot?.city}
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Homepage;
