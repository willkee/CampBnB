import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createSpot } from "../../store/spots";
import styles from "./NewSpot.module.css";

const NewSpotForm = () => {
	const [errors, setErrors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [type, setType] = useState("tent");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [capacity, setCapacity] = useState(1);
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
					open: true,
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
		<div>
			{loaded && (
				<form onSubmit={handleSubmit}>
					<ul className={styles.error_container}>
						{errors.map((error, idx) => (
							<li key={idx}>{error}</li>
						))}
					</ul>
					<label>
						Name
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></input>
					</label>
					<label>
						Street Address
						<input
							type="text"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						></input>
					</label>
					<label>
						City or Town
						<input
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						></input>
					</label>
					<label>
						Latitude
						<input
							type="number"
							value={lat}
							onChange={(e) => setLat(e.target.value)}
						></input>
					</label>
					<label>
						Longitude
						<input
							type="number"
							value={long}
							onChange={(e) => setLong(e.target.value)}
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
						Description
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</label>
					<label>
						Maximum Capacity (per spot)
						<textarea
							value={capacity}
							onChange={(e) => setCapacity(e.target.value)}
						></textarea>
					</label>
					<button type="submit">Create your Spot</button>
				</form>
			)}
		</div>
	);
};

export default NewSpotForm;
