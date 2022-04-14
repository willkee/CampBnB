import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyBookings } from "../../store/bookings";

const ProfilePage = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);
	const myBookings = useSelector((state) => Object.values(state.bookings));

	useEffect(() => {
		dispatch(getMyBookings()).then(() => setIsLoaded(true));
	}, [dispatch]);

	if (!sessionUser) {
		return history.push("/main");
	}

	return (
		<div>
			{isLoaded &&
				<div>
					<h1>{`${sessionUser.firstName} ${sessionUser.lastName}`}</h1>
					<div>
						{myBookings.map((booking) => (
							<div key={booking.id}>
								<div>
									<div>{booking.Spot.name}</div>

								</div>
								<div>Start: {new Date(booking.startDate).toDateString()}</div>
								<div>End: {new Date(booking.endDate).toDateString()}</div>
								<div>{booking.id}</div>
							</div>
						))}
					</div>
				</div>
			}
		</div>
	);
};

export default ProfilePage;
