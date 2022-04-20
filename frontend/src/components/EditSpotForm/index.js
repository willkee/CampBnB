import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOneSpot } from "../../store/spots";
import { hideModal } from "../../store/modal";
import styles from "./EditSpot.module.css";

const EditSpotForm = ({ spot }) => {
	const [errors, setErrors] = useState([]);
	const [name, setName] = useState(spot.name);
	const [address, setAddress] = useState(spot.address);
	const [city, setCity] = useState(spot.city);
	const [lat, setLat] = useState(spot.lat);
	const [long, setLong] = useState(spot.long);
	const [imageUrl, setImageUrl] = useState(spot.imageUrl);
	const [type, setType] = useState(spot.type);
	const [price, setPrice] = useState(spot.price);
	const [description, setDescription] = useState(spot.description || "");
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
			await dispatch(hideModal());
			return;
		} catch (err) {
			const data = await err.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};

	const rightInput = () => (
		<i id={styles.yes} className="fa-solid fa-square-check" />
	);
	const wrongInput = () => (
		<i id={styles.no} className="fa-solid fa-rectangle-xmark" />
	);

	return (
		<div className={styles.container}>
			<div
				className={
					errors.length > 0 ? styles.error_header : styles.edit_header
				}
			>
				<h1>Edit Spot Details</h1>
				<div className={styles.sub_heading}>
					Please limit any location changes to within Colorado. More
					states coming soon!
				</div>
			</div>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				{errors.length > 0 && (
					<div className={styles.error_container}>
						{errors.map((error, idx) => (
							<div key={idx}>{error}</div>
						))}
					</div>
				)}
				<label>
					Name
					<div className={styles.input_container}>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{name && name.length <= 255
							? rightInput()
							: wrongInput()}
					</div>
				</label>
				{!latLongOnly ? (
					<>
						<label>
							Street Address
							<div className={styles.input_container}>
								<input
									type="text"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
								{address && address.length <= 255
									? rightInput()
									: wrongInput()}
							</div>
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
							<h5>Valid coordinates for Colorado:</h5>
							<p>Latitude: 37° to 41° (37°N to 41°N).</p>
							<p>Longitude -102° to -109° (102° to 109°W).</p>
							<p>
								Please enter coordinates in decimal format only.
							</p>
						</div>
						<div className={styles.coordinates}>
							<label id={styles.cord1}>
								Latitude
								<div className={styles.input_container}>
									<input
										id={styles.latitude}
										type="number"
										value={lat}
										onBlur={(e) =>
											setLat(
												parseFloat(e.target.value)
													.toFixed(6)
													.toString()
											)
										}
										onChange={(e) => setLat(e.target.value)}
										placeholder="XX.XXXXXX"
									/>
									{lat && lat >= 37 && lat <= 41
										? rightInput()
										: wrongInput()}
								</div>
							</label>
							<label>
								Longitude
								<div className={styles.input_container}>
									<input
										id={styles.longitude}
										type="number"
										value={long}
										onBlur={(e) =>
											setLong(
												parseFloat(
													e.target.value > 0
														? e.target.value * -1
														: e.target.value
												)
													.toFixed(6)
													.toString()
											)
										}
										onChange={(e) =>
											setLong(e.target.value)
										}
										placeholder="-10X.XXXXXX"
									/>
									{long && long <= -102 && long >= -109
										? rightInput()
										: wrongInput()}
								</div>
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
					<div className={styles.input_container}>
						<input
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						{city && city.length <= 255
							? rightInput()
							: wrongInput()}
					</div>
				</label>
				<label>
					Image URL
					<div className={styles.input_container}>
						<input
							type="text"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
							placeholder="Accepted formats: .jpg, .jpeg, .png, .gif."
						/>
						{imageUrl &&
						imageUrl.length >= 3 &&
						imageUrl.length <= 2048 &&
						(imageUrl.endsWith(".jpg") ||
							imageUrl.endsWith(".jpeg") ||
							imageUrl.endsWith(".png") ||
							imageUrl.endsWith(".gif"))
							? rightInput()
							: wrongInput()}
					</div>
				</label>
				<label>
					Type of Site
					<div className={styles.input_container}>
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
						{type ? rightInput() : wrongInput()}
					</div>
				</label>
				<label>
					Price per night
					<div className={styles.input_container}>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						{price === 0
							? rightInput()
							: price > 0
							? rightInput()
							: wrongInput()}
					</div>
				</label>
				<label>
					Maximum capacity
					<div className={styles.input_container}>
						<input
							type="number"
							value={capacity}
							onChange={(e) => setCapacity(e.target.value)}
						/>
						{capacity ? rightInput() : wrongInput()}
					</div>
				</label>
				<label>
					Description (Optional)
					<div className={styles.input_container}>
						<textarea
							value={description}
							className={styles.add_spot_textarea}
							placeholder="Optional: Please provide a brief description of your spot."
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
						<i id={styles.opt} className="fa-solid fa-square" />
					</div>
				</label>

				{errors.length > 0 && (
					<div className={styles.error_notification}>
						Please fix errors above and re-submit.
					</div>
				)}

				<div className={styles.button_container}>
					<button className={styles.submit} type="submit">
						Edit Details
					</button>
					<div
						role="button"
						onClick={() => dispatch(hideModal())}
						className={styles.cancel}
					>
						Cancel
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditSpotForm;
