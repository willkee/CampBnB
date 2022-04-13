import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateOneSpot } from "../../store/spots";
import styles from "../NewSpotForm/NewSpot.module.css";

const EditSpotForm = ({ spot }) => {
	const history = useHistory();
	const [errors, setErrors] = useState([]);
	const [name, setName] = useState(spot.name);
	const [address, setAddress] = useState(spot.address);
	const [city, setCity] = useState(spot.city);
	const [lat, setLat] = useState(spot.lat);
	const [long, setLong] = useState(spot.long);
	const [imageUrl, setImageUrl] = useState(spot.imageUrl);
	const [type, setType] = useState(spot.type);
	const [price, setPrice] = useState(spot.price);
	const [description, setDescription] = useState(spot.description);
	const [capacity, setCapacity] = useState(spot.capacity);

	const [latLongOnly, setLatLongOnly] = useState(false);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(
				updateOneSpot({
					id: spot.id,
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
		<>
			<h1>Update Your Spot</h1>
			<div className={styles.sub_heading}>
				We are currently only accepting spots within the State of
				Colorado. More states coming soon!
			</div>
			<form className={styles.form_container} onSubmit={handleSubmit}>
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
								onChange={(e) => setAddress(e.target.value)}
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
								Valid latitude coordinates for Colorado are
								between 37 degrees and 41 degrees. (37 to 41
								degrees North)
							</div>
							<div>
								Valid longitude coordinates for Colorado are
								between -102 degrees and -109 degrees. (102 to
								109 degrees West)
							</div>
							<div>
								Please enter latitude and longitude coordinates
								in decimal format only.
							</div>
						</div>
						<div className={styles.coordinates}>
							<label id={styles.cord1}>
								Latitude
								<input
									id={styles.latitude}
									type="number"
									value={lat}
									onChange={(e) => setLat(e.target.value)}
									placeholder="XX.XXXXXX"
								></input>
							</label>
							<label>
								Longitude
								<input
									id={styles.longitude}
									type="number"
									value={long}
									onChange={(e) => setLong(e.target.value)}
									placeholder="XX.XXXXXX"
								></input>
							</label>
						</div>
						<div
							className={styles.loc_switch}
							onClick={() => setLatLongOnly(false)}
						>
							Want to enter a street address instead? Click here.
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
	);
};

export default EditSpotForm;
