import styles from "./ErrorPage.module.css";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
	const history = useHistory();
	return (
		<div className={styles.container}>
			<h1 className={styles.lost}>Page Not Found</h1>
			<button
				className={styles.return_home}
				type="button"
				onClick={() => history.push("/main")}
			>
				Return Home
			</button>
			<img
				src="https://campbnb.s3.us-west-1.amazonaws.com/404page.jpeg"
				alt="404 LOST!"
				className={styles.error_img}
			></img>
		</div>
	);
};

export default ErrorPage;
