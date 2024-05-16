import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	updateUserNames,
	updateUserEmail,
} from "../../../store/session/thunks";
import styles from "./UserInfo.module.css";
import { FiCheck, FiX, FiEdit, FiAlertOctagon } from "react-icons/fi";

const UserInfo = () => {
	const sessionUser = useSelector((state) => state.session.user);

	const [showNameUpdate, setShowNameUpdate] = useState(false);
	const [showEmailUpdate, setShowEmailUpdate] = useState(false);

	const [firstName, setFirstName] = useState(sessionUser.firstName);
	const [lastName, setLastName] = useState(sessionUser.lastName);
	const [email, setEmail] = useState(sessionUser.email);

	const [nameErrors, setNameErrors] = useState([]);
	const [emailErrors, setEmailErrors] = useState([]);

	const dispatch = useDispatch();

	const handleNameUpdate = async () => {
		setNameErrors([]);
		try {
			await dispatch(
				updateUserNames({
					id: sessionUser.id,
					firstName: firstName.trim(),
					lastName: lastName.trim(),
				})
			);
			setShowNameUpdate(false);
		} catch (err) {
			const data = await err.json();
			if (data && data.errors)
				setNameErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
		}
	};

	const handleEmailChange = async () => {
		setEmailErrors([]);

		if (sessionUser.id === 1)
			return setEmailErrors([
				"Nice try. There's more error validations where this came from.",
			]);

		try {
			await dispatch(updateUserEmail(sessionUser.id, email.trim()));
			setShowEmailUpdate(false);
		} catch (err) {
			const data = await err.json();
			if (data && data.errors)
				setEmailErrors(
					data.errors.filter((error) => error !== "Invalid value")
				);
		}
	};

	const cancelNameChange = () => {
		setShowNameUpdate(false);
		setFirstName(sessionUser.firstName);
		setLastName(sessionUser.lastName);
		setNameErrors([]);
	};

	const cancelEmailChange = () => {
		setEmailErrors([]);
		setEmail(sessionUser.email);
		setShowEmailUpdate(false);
	};

	return (
		<div className={styles.container}>
			<h3>Your User Info</h3>
			{nameErrors.length > 0 && (
				<div className={styles.errors_container}>
					{nameErrors.map((error, idx) => (
						<div key={idx}>{error}</div>
					))}
				</div>
			)}
			<div className={styles.names}>
				<div>
					<div className={styles.fn}>
						<h4>First name</h4>
						{showNameUpdate ? (
							<input
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							></input>
						) : (
							<div className={styles.info_text}>
								{sessionUser.firstName}
							</div>
						)}
					</div>
					<div className={styles.ln}>
						<h4>Last name</h4>
						{showNameUpdate ? (
							<input
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							></input>
						) : (
							<div className={styles.info_text}>
								{sessionUser.lastName}
							</div>
						)}
					</div>
				</div>
				{showNameUpdate ? (
					<div className={styles.update_buttons}>
						<span className={styles.check}>
							<FiCheck size="20px" onClick={handleNameUpdate} />
						</span>
						<span className={styles.cancel}>
							<FiX size="20px" onClick={cancelNameChange} />
						</span>
					</div>
				) : (
					<span className={styles.edit_name}>
						<FiEdit onClick={() => setShowNameUpdate(true)} />
					</span>
				)}
			</div>
			{emailErrors.length > 0 && (
				<div className={styles.errors_container}>
					{emailErrors.map((error, idx) => (
						<div key={idx}>{error}</div>
					))}
				</div>
			)}
			<div className={styles.email}>
				<div className={styles.email_info}>
					<h4>Email</h4>
					{showEmailUpdate ? (
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></input>
					) : (
						<div className={styles.info_text}>
							{sessionUser.email}
						</div>
					)}
				</div>
				{showEmailUpdate ? (
					<div className={styles.update_buttons}>
						<span className={styles.check}>
							<FiCheck size="20px" onClick={handleEmailChange} />
						</span>
						<span className={styles.cancel}>
							<FiX size="20px" onClick={cancelEmailChange} />
						</span>
					</div>
				) : (
					<>
						{sessionUser.id === 1 ? (
							<div className={styles.demo_error}>
								<FiAlertOctagon color="red" />
								<span>Demo User email change not allowed</span>
							</div>
						) : (
							<span className={styles.edit_email}>
								<FiEdit
									onClick={() => setShowEmailUpdate(true)}
								/>
							</span>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default UserInfo;
