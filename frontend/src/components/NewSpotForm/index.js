import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSpot } from "../../store/spots";
import styles from "./NewSpot.module.css";

const NewSpotForm = () => {
	const history = useHistory();
	const [errors, setErrors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [lat, setLat] = useState();
	const [long, setLong] = useState();
	const [imageUrl, setImageUrl] = useState("");
	const [type, setType] = useState("tent");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [capacity, setCapacity] = useState(1);

	const [latLongOnly, setLatLongOnly] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		setLoaded(true);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				createSpot({
					name,
					address,
					city,
					lat,
					long,
					imageUrl,
					type,
					price,
					description,
					capacity,
				})
			);
			console.log("HANDLE SUBMIT!");
			return;
		} catch (err) {
			const data = await err.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};
	return (
		<div className={styles.container}>
			{loaded && (
				<>
					<h1>Create Your Spot!</h1>
					<div>
						We are currently only accepting spots within the State
						of Colorado. More states coming soon!
					</div>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
					>
						<ul className={styles.error_container}>
							{errors.map((error, idx) => (
								<li key={idx}>{error}</li>
							))}
						</ul>
						<label>
							Name Your Spot!
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</label>
						{!latLongOnly ? (
							<>
								<label>
									Street Address
									<input
										type="text"
										value={address}
										onChange={(e) =>
											setAddress(e.target.value)
										}
									></input>
								</label>
								<div
									className={styles.loc_switch}
									onClick={() => setLatLongOnly(true)}
								>
									No street address? Click here.
								</div>
							</>
						) : (
							<>
								<div className={styles.coordinates_info}>
									<div>
										Valid latitude coordinates for Colorado
										are between 37 degrees and 41 degrees.
										(37 to 41 degrees North)
									</div>
									<div>
										Valid longitude coordinates for Colorado
										are between -102 degrees and -109
										degrees. (102 to 109 degrees West)
									</div>
									<div>
										Please enter latitude and longitude
										coordinates in decimal format only.
									</div>
								</div>
								<div className={styles.coordinates}>
									<label id={styles.cord1}>
										Latitude
										<input
											id={styles.latitude}
											type="number"
											value={lat}
											onChange={(e) =>
												setLat(e.target.value)
											}
											placeholder="XX.XXXXXX"
										></input>
									</label>
									<label>
										Longitude
										<input
											id={styles.longitude}
											type="number"
											value={long}
											onChange={(e) =>
												setLong(e.target.value)
											}
											placeholder="XX.XXXXXX"
										></input>
									</label>
								</div>
								<div
									className={styles.loc_switch}
									onClick={() => setLatLongOnly(false)}
								>
									Want to enter a street address instead?
									Click here.
								</div>
							</>
						)}

						<label>
							City or Town
							<input
								type="text"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							></input>
						</label>
						<label>
							Image URL
							<input
								type="text"
								value={imageUrl}
								onChange={(e) => setImageUrl(e.target.value)}
							></input>
						</label>
						<label>
							Type of Site
							<select
								type="text"
								value={type}
								onChange={(e) => setType(e.target.value)}
							>
								<option value="tent">Tent</option>
								<option value="rv">RV</option>
								<option value="vehicle">Vehicle</option>
								<option value="backpacking">Backpacking</option>
							</select>
						</label>
						<label>
							Price per Night
							<input
								type="number"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></input>
						</label>
						<label>
							Description (Optional)
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</label>
						<label>
							Maximum Capacity (per spot)
							<input
								type="number"
								value={capacity}
								onChange={(e) => setCapacity(e.target.value)}
							></input>
						</label>
						<div className={styles.button_container}>
							<button className={styles.submit} type="submit">
								Create your Spot
							</button>
							<div
								role="button"
								onClick={() => history.push("/main")}
								className={styles.cancel}
							>
								Cancel
							</div>
						</div>
					</form>
				</>
			)}
		</div>
	);
};

export default NewSpotForm;
