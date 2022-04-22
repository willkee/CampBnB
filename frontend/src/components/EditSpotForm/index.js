import React from "react";
import { useEffect, useState } from "react";
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
	const [newImg, setNewImg] = useState(null);

	const [type, setType] = useState(spot.type);
	const [price, setPrice] = useState(spot.price);
	const [description, setDescription] = useState(spot.description || "");
	const [capacity, setCapacity] = useState(spot.capacity);

	const [latLongOnly, setLatLongOnly] = useState(false);
	const [chooseNewImg, setChooseNewImg] = useState(false);

	const [submitted, setSubmitted] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		loader();
		return () => {
			setName();
			setAddress();
			setCity();
			setLat();
			setLong();
			setImageUrl();
			setNewImg(null);
			setType();
			setPrice();
			setDescription("");
			setCapacity();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loader = () => {
		setErrors([]);
		setName(spot.name);
		setAddress(spot.address);
		setCity(spot.city);
		setLat(spot.lat);
		setLong(spot.long);
		setImageUrl(spot.imageUrl);
		setNewImg(null);
		setType(spot.type);
		setPrice(spot.price);
		setDescription(spot.description || "");
		setCapacity(spot.capacity);
		setLatLongOnly(false);
		setChooseNewImg(false);
		setSubmitted(false);
	};

	const submitClicked = (e) => {
		e.preventDefault();
		setSubmitted(true);
		handleSubmit();
	};

	const handleSubmit = async () => {
		setErrors([]);

		try {
			if (newImg) {
				// eslint-disable-next-line eqeqeq
				if (lat == 0 && long == 0) {
					await dispatch(
						updateOneSpot({
							id: spot.id,
							name,
							address,
							city,
							lat: null,
							long: null,
							imageUrl: newImg,
							type,
							price,
							description,
							capacity,
						})
					);
				} else {
					await dispatch(
						updateOneSpot({
							id: spot.id,
							name,
							address,
							city,
							lat,
							long,
							imageUrl: newImg,
							type,
							price,
							description,
							capacity,
						})
					);
				}
			} else {
				chooseOld();
				// eslint-disable-next-line eqeqeq
				if (lat == 0 && long == 0) {
					await dispatch(
						updateOneSpot({
							id: spot.id,
							name,
							address,
							city,
							lat: null,
							long: null,
							imageUrl,
							type,
							price,
							description,
							capacity,
						})
					);
				} else {
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
				}
			}
			await dispatch(hideModal());
			setSubmitted(false);
			return;
		} catch (err) {
			const data = await err.json();
			if (data && data.errors)
				setErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
			setSubmitted(false);
		}
	};

	const updateFile = (e) => {
		const file = e.target.files[0];
		setNewImg(file);
	};

	const chooseOld = () => {
		setImageUrl(spot.imageUrl);
		setNewImg(null);
		setChooseNewImg(false);
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
					We encourage any location changes to be within Colorado.
					More states coming soon!
				</div>
			</div>
			<form onSubmit={submitClicked} className={styles.form_container}>
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
							onClick={() => {
								setLatLongOnly(true);
								setLat(spot?.lat ? spot.lat : 0);
								setLong(spot?.long ? spot.long : 0);
							}}
						>
							No street address? Click here.
						</div>
					</>
				) : (
					<>
						<div className={styles.coordinates_info}>
							<h5>
								Valid coordinates for Colorado (please enter in
								decimal format only):
							</h5>
							<p>
								<span>Latitude: 37° to 41°</span> /
								<span> Longitude -102° to -109°</span>
							</p>
							<p></p>
							<div>
								Note: To skip, leave values at 0, or clear the
								input fields.
							</div>
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
												e.target.value
												// parseFloat(
												// 	e.target.value
												// ).toFixed(6)
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
												e.target.value
												// parseFloat(
												// 	e.target.value > 0
												// 		? e.target.value * -1
												// 		: e.target.value
												// ).toFixed(6)
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
				{!chooseNewImg && (
					<>
						<label>
							Image URL
							<div className={styles.input_container}>
								<input
									type="text"
									value={imageUrl}
									disabled
									onChange={() => {
										alert(
											"Nice try. Please upload an image instead."
										);
										setImageUrl(spot.imageUrl);
									}}
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
						<div
							className={styles.switch_upload}
							onClick={() => setChooseNewImg(true)}
						>
							Want to upload a new image? Click here.
						</div>
					</>
				)}
				{chooseNewImg && (
					<>
						<label>
							Image Upload
							<div className={styles.input_container}>
								<input
									type="file"
									onChange={updateFile}
									accept="image/*"
								/>
							</div>
						</label>
						{newImg && (
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
												newImg.size > 1000000
													? styles.bad_entry
													: ""
											}
										>
											{(newImg.size / 1000).toFixed(2)} KB
										</span>
									</div>
									<div>
										File Type:
										<span
											className={
												newImg.type === "image/jpeg" ||
												newImg.type === "image/jpg" ||
												newImg.type === "image/png" ||
												newImg.type === "image/gif"
													? ""
													: styles.bad_entry
											}
										>
											{newImg.type}
										</span>
									</div>
								</div>
							</>
						)}
						<div
							onClick={chooseOld}
							className={styles.switch_upload}
						>
							Want to use the same image? Click here.
						</div>
					</>
				)}
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
					<button
						disabled={submitted}
						className={submitted ? styles.loading : styles.submit}
						type="submit"
					>
						{submitted ? "Loading..." : "Edit Details"}
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
