import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSpot } from "../../store/spots";
import styles from "./NewSpot.module.css";

import { SquareCheck, RectangleX, Square } from "../../assets/icons";

const NewSpotForm = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState("");
	const [imageUrl, setImageUrl] = useState(null);
	const [type, setType] = useState("tent");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [capacity, setCapacity] = useState("");

	const [submitted, setSubmitted] = useState(false);

	const [latLongOnly, setLatLongOnly] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		setLoaded(true);
	}, []);

	const submitClicked = (e) => {
		e.preventDefault();
		setSubmitted(true);
		handleSubmit();
	};

	const handleSubmit = async () => {
		setErrors([]);

		if (!imageUrl) {
			setSubmitted(false);
			window.scrollTo({ top: 0 });
			setErrors(["Please upload an image."]);
			return;
		}

		try {
			const newSpot = await dispatch(
				createSpot({
					name: name.trim(),
					address: address.trim(),
					city: city.trim(),
					lat,
					long,
					imageUrl,
					type,
					price,
					description: description.trim(),
					capacity,
				})
			);
			setSubmitted(false);
			return navigate(`/spots/${newSpot.id}`);
		} catch (err) {
			const data = await err.json();
			if (data && data.errors)
				setErrors(data.errors.filter((err) => err !== "Invalid value"));
			setSubmitted(false);
			window.scrollTo({ top: 0 });
		}
	};

	const updateFile = (e) => {
		const file = e.target.files[0];
		setImageUrl(file);
	};

	const rightInput = () => <SquareCheck />;
	const wrongInput = () => <RectangleX />;

	return (
		<div className={styles.container}>
			{loaded && (
				<>
					<h1>Create Your Spot!</h1>
					<div className={styles.sub_heading}>
						We encourage users to post spots within Colorado at this
						time. More states coming soon!
					</div>
					<form
						onSubmit={submitClicked}
						className={styles.form_container}
					>
						{errors.length > 0 && (
							<div className={styles.error_container}>
								{errors.map((error, idx) => (
									<div key={idx}>{error}</div>
								))}
							</div>
						)}
						<label>
							Name Your Spot!
							<div className={styles.input_container}>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								{name && name.length > 4 && name.length < 256
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
											onChange={(e) =>
												setAddress(e.target.value)
											}
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
									<h5>
										Please limit latitude and longitude
										coordinates to within Colorado. (We are
										expanding to more states soon!) Valid
										coordinates:
									</h5>
									<p>Latitude: 37° to 41° (37°N to 41°N).</p>
									<p>
										Longitude -102° to -109° (102° to
										109°W).
									</p>
									<p>
										Please enter coordinates in decimal
										format only.
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
														parseFloat(
															e.target.value
														)
															.toFixed(6)
															.toString()
													)
												}
												onChange={(e) =>
													setLat(e.target.value)
												}
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
																? e.target
																		.value *
																		-1
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
											{long &&
											long <= -102 &&
											long >= -109
												? rightInput()
												: wrongInput()}
										</div>
									</label>
								</div>
								<div
									className={styles.loc_switch}
									onClick={() => {
										setLatLongOnly(false);
										setLat(null);
										setLong(null);
									}}
								>
									Want to enter a street address instead?
									Click here.
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
								{city && city.length > 2 && city.length < 201
									? rightInput()
									: wrongInput()}
							</div>
						</label>
						<label>
							Image Upload
							<div className={styles.input_container}>
								<input
									type="file"
									onChange={updateFile}
									accept="image/*"
									required
								/>
							</div>
						</label>
						{imageUrl && (
							<>
								<div className={styles.upload_info}>
									Please limit file sizes to 1MB. File types
									accepted: .jpg, .jpeg, .png, .gif
								</div>
								<div className={styles.upload_file_info}>
									<div className={styles.section}>
										Your upload:
										<span
											className={
												imageUrl.size > 1000000
													? styles.bad_entry
													: ""
											}
										>
											{(imageUrl.size / 1000).toFixed(2)}{" "}
											KB
										</span>
									</div>
									<div>
										File Type:
										<span
											className={
												imageUrl.type ===
													"image/jpeg" ||
												imageUrl.type === "image/jpg" ||
												imageUrl.type === "image/png" ||
												imageUrl.type === "image/gif"
													? ""
													: styles.bad_entry
											}
										>
											{imageUrl.type}
										</span>
									</div>
								</div>
							</>
						)}
						{/* <label>
							Image URL
							<div className={styles.input_container}>
								<input
									type="text"
									value={imageUrl}
									onChange={(e) =>
										setImageUrl(e.target.value)
									}
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
						</label> */}
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
									<option value="backpacking">
										Backpacking
									</option>
								</select>{" "}
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
								{price && price >= 1 && price < 10000
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
									onChange={(e) =>
										setCapacity(e.target.value)
									}
								/>
								{capacity && capacity >= 1 && capacity < 1000
									? rightInput()
									: wrongInput()}
							</div>
						</label>
						<label>
							Description (Optional)
							<div className={styles.input_container}>
								<textarea
									value={description}
									className={styles.add_spot_textarea}
									placeholder="Optional: Please provide a brief description of your spot."
									onChange={(e) =>
										setDescription(e.target.value)
									}
								></textarea>
								<Square />
							</div>
						</label>
						<div className={styles.button_container}>
							<button
								className={
									submitted ? styles.loading : styles.submit
								}
								disabled={submitted}
								type="submit"
							>
								{submitted ? "Loading..." : "Create your Spot"}
							</button>
							<div
								role="button"
								onClick={() => navigate("/main")}
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
