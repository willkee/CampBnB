import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.lost}>Page Not Found</h2>
			<img
				src="https://campbnb.s3.us-west-1.amazonaws.com/road-sign-lost.jpeg"
				alt="404 LOST!"
				className={styles.error_img}
			></img>
		</div>
	);
};

export default ErrorPage;
