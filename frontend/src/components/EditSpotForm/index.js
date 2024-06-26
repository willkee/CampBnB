import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOneSpot } from "../../store/spots/thunks";
import { hideModal } from "../../store/modal/actions";
import styles from "./EditSpot.module.css";
import { SquareCheck, RectangleX } from "../../assets/icons";

const EditSpotForm = ({ id, initialData }) => {
	console.log(id, initialData, "EDIT SPOT FORM ID");
	const [errors, setErrors] = useState([]);
	const [name, setName] = useState(initialData.name);
	const [address, setAddress] = useState(initialData.address);
	const [city, setCity] = useState(initialData.city);
	const [lat, setLat] = useState(initialData.lat);
	const [long, setLong] = useState(initialData.long);

	const [imageUrl, setImageUrl] = useState(initialData.imageUrl);
	const [newImg, setNewImg] = useState(null);

	const [type, setType] = useState(initialData.type);
	const [price, setPrice] = useState(initialData.price);
	const [description, setDescription] = useState(
		initialData.description || ""
	);
	const [capacity, setCapacity] = useState(initialData.capacity);

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
		setName(initialData.name);
		setAddress(initialData.address);
		setCity(initialData.city);
		setLat(initialData.lat);
		setLong(initialData.long);
		setImageUrl(initialData.imageUrl);
		setNewImg(null);
		setType(initialData.type);
		setPrice(initialData.price);
		setDescription(initialData.description || "");
		setCapacity(initialData.capacity);
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
							id,
							name: name.trim(),
							address: address.trim(),
							city: city.trim(),
							lat: null,
							long: null,
							imageUrl: newImg,
							type,
							price,
							description: description.trim(),
							capacity,
						})
					);
				} else {
					await dispatch(
						updateOneSpot({
							id: id,
							name: name.trim(),
							address: address.trim(),
							city: city.trim(),
							lat,
							long,
							imageUrl: newImg,
							type,
							price,
							description: description.trim(),
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
							id: id,
							name: name.trim(),
							address: address.trim(),
							city: city.trim(),
							lat: null,
							long: null,
							imageUrl,
							type,
							price,
							description: description.trim(),
							capacity,
						})
					);
				} else {
					await dispatch(
						updateOneSpot({
							id: id,
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
		setImageUrl(initialData.imageUrl);
		setNewImg(null);
		setChooseNewImg(false);
	};

	const rightInput = () => <SquareCheck />;
	const wrongInput = () => <RectangleX />;

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
							className={styles.input_box}
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
									className={styles.input_box}
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
								setLat(initialData?.lat ? initialData.lat : 0);
								setLong(
									initialData?.long ? initialData.long : 0
								);
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
							<div className={styles.skip_message}>
								Note: To skip/delete, leave values at 0, or
								clear the input fields.
							</div>
						</div>
						<div className={styles.coordinates}>
							<label id={styles.cord1}>
								Latitude
								<div className={styles.input_container}>
									<input
										className={styles.input_box}
										id={styles.latitude}
										type="number"
										value={lat}
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
										className={styles.input_box}
										id={styles.longitude}
										type="number"
										value={long}
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
							className={styles.input_box}
							type="text"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						{city && city.length > 2 && city.length < 201
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
											"Please upload an image instead."
										);
										setImageUrl(initialData.imageUrl);
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
									className={styles.input_box}
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
							className={styles.input_box}
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
							className={styles.input_box}
							type="number"
							value={capacity}
							onChange={(e) => setCapacity(e.target.value)}
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
							onChange={(e) => setDescription(e.target.value)}
						/>
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
