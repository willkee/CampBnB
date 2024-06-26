import { useSelector } from "react-redux";
import StarCount from "./StarCount";
import AddReview from "./AddReview";
import styles from "./Reviews.module.css";
import { User, Edit, Delete } from "../../assets/icons";

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
								<User />
								<div>
									<div className={styles.name}>
										{review?.User?.firstName}{" "}
										{review?.User?.lastName}
									</div>
									<div className={styles.date}>
										{new Date(review.createdAt)
											.toDateString()
											.slice(4)}
									</div>
								</div>
							</div>
							<div>
								<StarCount stars={review?.rating} />
								{sessionUser &&
									sessionUser.id === review?.userId && (
										<div className={styles.review_owner}>
											<Edit review={review} />
											<Delete
												id={review?.id}
												spotId={spotId}
											/>
										</div>
									)}
							</div>
						</div>
						<div className={styles.text}>{review.content}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
