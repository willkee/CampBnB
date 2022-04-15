import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Homepage.module.css";

const Homepage = ({ spots }) => {
	const [loaded, setLoaded] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);
	const history = useHistory();

	useEffect(() => {
		setLoaded(true);
	}, []);

	const sendToSpot = (id) => history.push(`/spots/${id}`);

	return (
		<div>
			{loaded && (
				<>
					{/* <div className={styles.c1}>
						<NavLink
							className={styles.return_to_splash}
							exact
							to="/"
						>
							<i className="fa-light fa-arrow-left"></i> Trying to
							return to the splash page? Click here.
						</NavLink>
					</div> */}
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
						{spots.map((spot) => (
							<div
								key={spot.id}
								className={styles.each_spot_container}
								onClick={() => sendToSpot(spot.id)}
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
								<h4>
									{spot.name.length > 20
										? spot.name.slice(0, 20) + "..."
										: spot.name}
								</h4>
								<div className={styles.city_info}>
									<i className="fa-light fa-mountain-city"></i>
									{spot.city}
								</div>
								<div className={styles.price_info}>
									<span>${spot.price}</span>
									<span>night</span>
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
