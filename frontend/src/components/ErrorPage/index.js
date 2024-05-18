import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

import funny_sign from "./funny_sign.jpeg";
const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<h1 className={styles.lost}>Oops! Made a wrong turn?</h1>
			<h3>Can't find what you're looking for.</h3>
			<button
				className={styles.return_home}
				type="button"
				onClick={() => navigate("/main")}
			>
				Return Home
			</button>
			<img
				src={funny_sign}
				alt="Sign not in use"
				className={styles.error_img}
			/>
		</div>
	);
};

export default ErrorPage;
