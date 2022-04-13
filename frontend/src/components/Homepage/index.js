import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal, currentModal } from "../../store/modal";
import EditSpotForm from "../EditSpotForm";
import DeleteConfirmation from "../DeleteConfirmation";
import styles from "./Homepage.module.css";

const Homepage = ({ spots }) => {
	const [loaded, setLoaded] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	useEffect(() => {
		setLoaded(true);
	}, []);

	const editSpotForm = (spot) => {
		dispatch(currentModal(() => <EditSpotForm spot={spot} />));
		dispatch(showModal());
	};

	const showDeleteConfirmation = (id) => {
		dispatch(currentModal(() => <DeleteConfirmation id={id} />));
		dispatch(showModal());
	};

	return (
		<div>
			{loaded && (
				<>
					<h1>Welcome to CampBnB</h1>
					<NavLink exact to="/">
						<i class="fa-light fa-arrow-left"></i> Trying to return
						to the splash page? Click here.
					</NavLink>
					<div className={styles.container}>
						{spots.map((spot) => (
							<div
								key={spot.id}
								className={styles.each_spot_container}
							>
								<img
									src={spot.imageUrl}
									alt="spot"
									width="100px"
									onError={(e) => {
										e.target.src =
											"https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg";
										e.onerror = null;
									}}
								/>
								<div>{`Host: ${spot.User.firstName} ${spot.User.lastName}`}</div>
								<div>{spot.name}</div>
								<div>{spot.address}</div>
								<div>{spot.city}</div>
								<div>${spot.price}/night</div>
								<div>Lat: {spot.lat}</div>
								<div>Long: {spot.long}</div>
								<div>Capacity: {spot.capacity}</div>
								{sessionUser &&
									sessionUser.id === spot.ownerId && (
										<div>
											<div
												onClick={() =>
													editSpotForm(spot)
												}
											>
												Edit
											</div>
											<div
												onClick={() =>
													showDeleteConfirmation(
														spot.id
													)
												}
											>
												Delete
											</div>
										</div>
									)}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Homepage;
