import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";
import { currentModal, showModal } from "../../store/modal";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import styles from "./SingleSpot.module.css";

const SingleSpot = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const { id } = useParams();
	const intId = parseInt(id, 10);
	const dispatch = useDispatch();

	const spot = useSelector((state) => state.spots[intId]);
	const sessionUser = useSelector((state) => state.session.user);

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

	return (
		<div className={styles.container1}>
			{isLoaded && (
				<div className={styles.container2}>
					<img
						src={spot.imageUrl}
						alt="spot"
						className={styles.img_header}
					></img>
					{sessionUser && sessionUser.id === spot.ownerId && (
						<div>
							<div onClick={() => editSpotForm(spot)}>Edit</div>
							<div
								onClick={() => showDeleteConfirmation(spot.id)}
							>
								Delete
							</div>
						</div>
					)}
					<div className={styles.content}>
						<h1>{spot.name}</h1>
						<div>
							<i className="fa-light fa-crown"></i>
							{` ${spot.User.firstName} ${spot.User.lastName}`}
						</div>
						{spot.address && <div>Address: {spot.address}</div>}
						<div>
							<i className="fa-light fa-location-crosshairs"></i>
							{` ${spot.lat}, ${spot.long}`}
						</div>
						<div>
							<i className="fa-light fa-mountain-city"></i>{" "}
							{spot.city}
						</div>
						<div>
							<i className="fa-light fa-square-dollar"></i> $
							{spot.price}
							/night
						</div>
						<div className={styles.desc}>{spot.description}</div>
						<div>{`Accepting bookings? ${
							spot.open ? "Yes" : "No"
						}`}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleSpot;
