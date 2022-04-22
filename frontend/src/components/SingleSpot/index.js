import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { csrfFetch } from "../../store/csrf";
import { getOneSpot } from "../../store/spots";

import NewBookingForm from "../NewBookingForm";
import OwnerControls from "./Utilities/OwnerControls";
import AcceptBookings from "./Utilities/AcceptBookings";
import styles from "./SingleSpot.module.css";

const SingleSpot = () => {
	const { id } = useParams();

	const spot = useSelector((state) => state.spots[parseInt(id, 10)]);
	const sessionUser = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);
	const [apiKey, setApiKey] = useState("");
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
	}, [dispatch, id]);

	if (isLoaded && !spot) return <Redirect to="/main" />;

	return (
		<div className={styles.container1}>
			{isLoaded && (
				<div className={styles.container2}>
					<img
						src={spot.imageUrl}
						alt="spot"
						className={styles.img_header}
						onError={(e) => {
							e.onerror = null;
							e.target.src =
								"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
						}}
					></img>
					<div className={styles.content}>
						<div className={styles.text_content}>
							<h1 className={styles.spot_title_name}>
								{spot.name}
							</h1>
							<div className={styles.host}>
								<div className={styles.cap_price_info}>
									<span>
										<span className={styles.cap_text}>
											Max Capacity:
										</span>
										<span className={styles.cap_num}>
											{spot.capacity}
										</span>
									</span>
									<i className="fa-solid fa-circle-small"></i>
									<span className={styles.price_header}>
										<span>${spot.price}</span>
										<span>night</span>
									</span>
								</div>
								<div>
									Host:{" "}
									{sessionUser &&
									spot.ownerId === sessionUser.id
										? "You!"
										: spot.User.firstName +
										  " " +
										  spot.User.lastName}
								</div>
							</div>

							<div className={styles.type_site_container}>
								{spot.type === "vehicle" ? (
									<div className={styles.type_info}>
										<i className="fa-solid fa-car-mirrors" />
										<span>Car Camping Site</span>
									</div>
								) : spot.type === "rv" ? (
									<div className={styles.type_info}>
										<i className="fa-solid fa-rv" />
										<span>RV Camping Site</span>
									</div>
								) : spot.type === "tent" ? (
									<div className={styles.type_info}>
										<i className="fa-solid fa-tent" />
										<span>Tent Camping Site</span>
									</div>
								) : (
									<div className={styles.type_info}>
										<i className="fa-solid fa-backpack" />
										<span>
											Backpacking Site (No Road Access)
										</span>
									</div>
								)}
							</div>

							<div className={styles.location_container}>
								{spot.address && (
									<div>
										<i
											id={styles.road_icon}
											className="fa-regular fa-road"
										></i>
										{spot.address}
									</div>
								)}
								{spot?.lat &&
									spot?.long &&
									spot?.lat !== "NaN" &&
									spot?.long !== "NaN" && (
										<div>
											<i
												id={styles.x_hairs}
												className="fa-light fa-location-crosshairs"
											/>
											{`${spot.lat}, ${spot.long}`}
										</div>
									)}
								<div>
									<i className="fa-light fa-mountain-city" />
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

							<div className={styles.desc}>
								{spot.description}
							</div>
						</div>
						<div className={styles.booking_form}>
							{sessionUser && (
								<>
									<div>
										{sessionUser.id === spot.ownerId ? (
											<OwnerControls
												sessionUser={sessionUser}
												spot={spot}
											/>
										) : (
											<AcceptBookings spot={spot} />
										)}
									</div>
									{sessionUser.id !== spot.ownerId && (
										<NewBookingForm spot={spot} />
									)}
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleSpot;
