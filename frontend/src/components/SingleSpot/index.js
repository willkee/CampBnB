import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { getOneSpot } from "../../store/spots/thunks";
import Reviews from "../Reviews";

import SpotOptions from "./SpotOptions";
import SpotMaps from "./SpotMaps";
import { CircleSmall } from "../../assets/icons";

import { FiUnlock, FiLock } from "react-icons/fi";

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

	const imgOnError = (e) => {
		e.onerror = null;
		e.target.src =
			"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
	};

	if (isLoaded && !spot) {
		return null;
	}
	return (
		<div className={styles.container}>
			{isLoaded && spot && (
				<div>
					<img
						src={spot.imageUrl}
						alt="spot"
						className={styles.img_header}
						onError={imgOnError}
					></img>
					<div className={styles.content}>
						<div className={styles.text_content}>
							<div className={styles.title_layer}>
								<h1 className={styles.spot_title_name}>
									<span>{spot.name}</span>
									<span className={styles.lock_icon}>
										{spot.open ? (
											<FiUnlock
												size={14}
												color="#ACD995"
											/>
										) : (
											<FiLock size={14} color="red" />
										)}
									</span>
								</h1>
								<SpotOptions
									id={id}
									sessionUser={sessionUser}
									spot={spot}
								/>
							</div>
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
									<CircleSmall />
									<span className={styles.price_header}>
										<span>${spot.price}</span>
										<span>night</span>
									</span>
								</div>
								<div>
									{`Host:
									${
										sessionUser &&
										spot.ownerId === sessionUser.id
											? "You!"
											: `${spot.User?.firstName} ${spot.User?.lastName}`
									}`}
								</div>
							</div>
							<SpotMaps
								id={id}
								setIsLoaded={setIsLoaded}
								apiKey={apiKey}
								setApiKey={setApiKey}
								spot={spot}
							/>
							<div className={styles.desc}>
								{spot.description}
							</div>
							<Reviews reviews={spot.Reviews} spotId={id} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleSpot;
