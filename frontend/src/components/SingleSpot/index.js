import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import { currentModal, showModal } from "../../store/modal";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import styles from "./SingleSpot.module.css";

import { switchOpening } from "../../store/spots";

const SingleSpot = () => {
	const { id } = useParams();
	const intId = parseInt(id, 10);

	const spot = useSelector((state) => state.spots[intId]);
	const sessionUser = useSelector((state) => state.session.user);
	const [isLoaded, setIsLoaded] = useState(false);

	const dispatch = useDispatch();

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
						<div>{acceptBookings()}</div>
						<div className={styles.edit} onClick={openClose}>
							{spot.open
								? "Stop New Bookings"
								: "Accept New Bookings"}
						</div>
						<div
							className={styles.edit}
							onClick={() => editSpotForm(spot)}
						>
							Edit
						</div>
						<div
							className={styles.delete}
							onClick={() => showDeleteConfirmation(spot.id)}
						>
							Delete
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
								"https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg";
							e.onerror = null;
						}}
					></img>
					<div className={styles.content}>
						<div>
							<h1>{spot.name}</h1>
							<div>
								<i className="fa-light fa-crown" />
								{` ${spot.User.firstName} ${spot.User.lastName}`}
							</div>
							{spot.address && <div>Address: {spot.address}</div>}
							<div>
								<i className="fa-light fa-location-crosshairs" />
								{` ${spot.lat}, ${spot.long}`}
							</div>
							<div>
								<i className="fa-light fa-mountain-city" />{" "}
								{spot.city}
							</div>
							<div>
								<i className="fa-light fa-square-dollar" /> $
								{spot.price}
								/night
							</div>
							<div className={styles.desc}>
								{spot.description}
							</div>
						</div>
						<div className={styles.booking_form}>
							<div>
								{sessionUser && sessionUser.id === spot.ownerId
									? ownerControls()
									: acceptBookings()}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleSpot;
