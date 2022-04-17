import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import { currentModal, showModal } from "../../store/modal";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import NewBookingForm from "../NewBookingForm";
import styles from "./SingleSpot.module.css";

import { switchOpening } from "../../store/spots";

const SingleSpot = () => {
	const { id } = useParams();
	const intId = parseInt(id, 10);

	const spot = useSelector((state) => state.spots[intId]);
	const sessionUser = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const loadData = async () => {
			await dispatch(getOneSpot(id));
			setIsLoaded(true);
		};
		loadData();
	}, [dispatch, id]);

	const editSpotForm = (spot) => {
		dispatch(currentModal(() => <EditSpotForm spot={spot} />));
		dispatch(showModal());
	};

	const showDeleteConfirmation = (id) => {
		dispatch(currentModal(() => <DeleteConfirmation id={id} />));
		dispatch(showModal());
	};

	if (isLoaded && !spot) {
		history.push("/main");
		return null;
	}

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
							e.target.src =
								"https://campbnb.s3.us-west-1.amazonaws.com/photo-1613513058775-cfc915838437.jpeg";
							e.onerror = null;
						}}
					></img>
					<div className={styles.content}>
						<div className={styles.text_content}>
							<h1>{spot.name}</h1>
							<div>
								Host:{" "}
								{spot.ownerId === sessionUser.id
									? "You!"
									: spot.User.firstName +
									  " " +
									  spot.User.lastName}
							</div>
							{spot.address && <div>Address: {spot.address}</div>}
							{spot.lat && spot.long && (
								<div>
									<i className="fa-light fa-location-crosshairs" />
									{` ${spot.lat}, ${spot.long}`}
								</div>
							)}
							<div>
								<i className="fa-light fa-mountain-city" />{" "}
								{spot.city}
							</div>
							<div>
								<i className="fa-light fa-square-dollar" />{" "}
								{spot.price === 0
									? "Free"
									: "$" + spot.price + "/night"}
							</div>
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
