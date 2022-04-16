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

	useEffect(() => {
		const loader = async () => {
			await dispatch(getAllSpots());
			setLoaded(true);
		};
		loader();
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
									<i className="fa-light fa-mountain-city" />
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
