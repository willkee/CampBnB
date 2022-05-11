import styles from "./Reviews.module.css";

const StarCount = ({ stars }) => {
	return (
		<div className={styles.stars}>
			{stars === 5 ? (
				<>
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
				</>
			) : stars === 4 ? (
				<>
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
				</>
			) : stars === 3 ? (
				<>
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
				</>
			) : stars === 2 ? (
				<>
					<i className="fa-solid fa-star-sharp" />
					<i className="fa-solid fa-star-sharp" />
				</>
			) : (
				<i className="fa-solid fa-star-sharp" />
			)}
		</div>
	);
};

export default StarCount;
