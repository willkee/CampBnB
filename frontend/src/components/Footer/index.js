import styles from "./Footer.module.css";
import { GitHub, LinkedIn } from "../../assets/brands";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const location = useLocation();

	if (location.pathname === "/") return null;

	return (
		<div className={styles.footer_container}>
			<div className={styles.left}>
				<i id={styles.icon1} className="devicon-vscode-plain" />
				<i id={styles.icon2} className="devicon-javascript-plain" />
				<i id={styles.icon3} className="devicon-nodejs-plain" />
				<i id={styles.icon4} className="devicon-react-original" />
				<i id={styles.icon5} className="devicon-redux-original" />
				<i id={styles.icon6} className="devicon-html5-plain" />
				<i id={styles.icon7} className="devicon-css3-plain" />
				<i id={styles.icon8} className="devicon-postgresql-plain" />
				<i id={styles.icon9} className="devicon-express-original" />
				<i id={styles.icon10} className="devicon-sequelize-plain" />
				<i id={styles.icon11} className="devicon-heroku-plain" />
				<i id={styles.icon12} className="devicon-canva-original" />
				<i id={styles.icon13} className="devicon-figma-plain" />
				<i id={styles.icon14} className="devicon-google-plain" />
				<i
					id={styles.icon15}
					className="devicon-amazonwebservices-original"
				/>
			</div>
			<div className={styles.right}>
				<div>Developed by Will Kee</div>
				<GitHub />
				<LinkedIn />
			</div>
		</div>
	);
};

export default Footer;
