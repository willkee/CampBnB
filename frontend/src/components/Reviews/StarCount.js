import styles from "./Reviews.module.css";

import { Star } from "../../assets/icons";

const StarCount = ({ stars }) => {
	return (
		<div className={styles.stars}>
			{stars === 5 ? (
				<>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</>
			) : stars === 4 ? (
				<>
					<Star />
					<Star />
					<Star />
					<Star />
				</>
			) : stars === 3 ? (
				<>
					<Star />
					<Star />
					<Star />
				</>
			) : stars === 2 ? (
				<>
					<Star />
					<Star />
				</>
			) : (
				<Star />
			)}
		</div>
	);
};

export default StarCount;
