import React from "react";
import styles from "./Homepage.module.css";

const Homepage = ({ spots }) => {
	return (
		<div>
			<h1>Hello</h1>
			<div className={styles.container}>
				{spots.map((spot) => (
					<div key={spot.id} className={styles.each_spot_container}>
						<img src={spot.imageUrl} alt="spot" width="100px" />
						<div>{`Host: ${spot.User.firstName} ${spot.User.lastName}`}</div>
						<div>{spot.name}</div>
						<div>{spot.address}</div>
						<div>{spot.city}</div>
						<div>${spot.price}/night</div>
						<div>Lat: {spot.lat}</div>
						<div>Long: {spot.long}</div>
						<div>Capacity: {spot.capacity}</div>
						<div>{spot.open ? "Open" : "Closed"}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;
