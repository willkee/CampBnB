import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.css";

import Bookings from "./Bookings/";
import UserInfo from "./UserInfo/";
import MySpots from "./MySpots";

const ProfilePage = () => {
	const [activePage, setActivePage] = useState(<Bookings />);

	const navigate = useNavigate();
	const sessionUser = useSelector((state) => state.session.user);

	if (!sessionUser) {
		return navigate("/main");
	}

	return (
		// <div className={styles.pf_oc}>
		<div className={styles.profile_container}>
			<div className={styles.name_cont}>
				<h1>{`${sessionUser.firstName} ${sessionUser.lastName}`}</h1>
			</div>
			<div className={styles.content_all}>
				<div className={styles.left}>
					<div onClick={() => setActivePage(<Bookings />)}>
						Bookings
					</div>
					<div onClick={() => setActivePage(<MySpots />)}>
						My Spots
					</div>
					<div onClick={() => setActivePage(<UserInfo />)}>
						Profile Settings
					</div>
				</div>

				<div className={styles.main}>{activePage}</div>
			</div>
		</div>
		// </div>
	);
};

export default ProfilePage;
