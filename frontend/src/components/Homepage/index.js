import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";
import styles from "./Homepage.module.css";

const Homepage = ({ spots }) => {
	const [loaded, setLoaded] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);
	// const spots = useSelector((state) => Object.values(state.spots));

	const history = useHistory();
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

	const sendToSpot = (id) => history.push(`/spots/${id}`);

	return (
		<div>
			{loaded && (
				<>
					{sessionUser ? (
						<h1
							className={styles.h1_element}
						>{`Welcome back, ${sessionUser.firstName}!`}</h1>
					) : (
						<h1 className={styles.h1_element}>
							Welcome to CampBnB!
						</h1>
					)}
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
								<h4>
									{spot.name.length > 20
										? spot.name.slice(0, 20) + "..."
										: spot.name}
								</h4>
								<div className={styles.city_info}>
									<i className="fa-light fa-mountain-city" />
									{spot?.city?.length > 20
										? spot?.city?.slice(0, 20) + "..."
										: spot?.city}
								</div>
								<div className={styles.price_type}>
									<div>
										<span>${spot.price}</span>
										<span>night</span>
									</div>
									<div>
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
									<i className="fa-light fa-mountain-city" />
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
