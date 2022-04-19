import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import { currentModal, showModal } from "../../store/modal";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import NewBookingForm from "../NewBookingForm";
import styles from "./SingleSpot.module.css";
import { csrfFetch } from "../../store/csrf";
import { switchOpening } from "../../store/spots";

const SingleSpot = () => {
	const { id } = useParams();
	const intId = parseInt(id, 10);

	const spot = useSelector((state) => state.spots[intId]);
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

	const editSpotForm = (spot) => {
		dispatch(currentModal(() => <EditSpotForm spot={spot} />));
		dispatch(showModal());
	};

	const showDeleteConfirmation = (id) => {
		dispatch(currentModal(() => <DeleteConfirmation id={id} />));
		dispatch(showModal());
	};

	if (isLoaded && !spot) return <Redirect to="/main" />;

	const acceptBookings = () => {
		return (
			<div
				className={
					spot.open
						? styles.accept_container_green
						: styles.accept_container_red
				}
			>
				<span>
					{spot.open ? (
						<i
							id={styles.green}
							className="fa-light fa-hexagon-check"
						/>
					) : (
						<i
							id={styles.red}
							className="fa-light fa-hexagon-xmark"
						/>
					)}
				</span>
				<span className={spot.open ? styles.green : styles.red}>
					{spot.open ? "Accepting New Bookings" : "No New Bookings"}
				</span>
			</div>
		);
	};

	const openClose = async () => await dispatch(switchOpening(intId));

	const ownerControls = () => {
		if (sessionUser) {
			if (sessionUser.id === spot.ownerId) {
				return (
					<div className={styles.owner_controls}>
						<div>
							<div>{acceptBookings()}</div>
							<div className={styles.switch} onClick={openClose}>
								{spot.open
									? "Stop New Bookings?"
									: "Accept New Bookings?"}
							</div>
						</div>
						<div
							className={styles.edit}
							onClick={() => editSpotForm(spot)}
						>
							Edit Spot
						</div>
						<div
							className={styles.delete}
							onClick={() => showDeleteConfirmation(spot.id)}
						>
							Delete Spot
						</div>
					</div>
				);
			}
		}
	};

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
							<h1>{spot.name}</h1>
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
								{spot.lat && spot.long && (
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
										{sessionUser.id === spot.ownerId
											? ownerControls()
											: acceptBookings()}
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
