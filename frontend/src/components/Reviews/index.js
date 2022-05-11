import { useSelector } from "react-redux";

import StarCount from "./StarCount";
import AddReview from "./AddReview";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews, spotId }) => {
	const sessionUser = useSelector((state) => state.session.user);

	return (
		<div className={styles.reviews_container}>
			<h3>Reviews</h3>
			{sessionUser && <AddReview spotId={spotId} />}
			<div className={styles.list_reviews}>
				{Object.values(reviews).map((review) => (
					<div className={styles.each_review} key={review.id}>
						<div className={styles.header}>
							<div className={styles.profile}>
								<i className="fa-thin fa-user"></i>
								<div>
									<div className={styles.name}>
										{review.User.firstName}{" "}
										{review.User.lastName}
									</div>
									<div className={styles.date}>
										{new Date(review.createdAt)
											.toDateString()
											.slice(4)}
									</div>
								</div>
							</div>
							<StarCount stars={review.rating} />
						</div>
						<div className={styles.text}>{review.content}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
