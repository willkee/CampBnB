import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<div>Developed by Will Kee</div>
			<a
				href="https://github.com/willkee"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-github-square" />
			</a>
			<a
				href="https://www.linkedin.com/in/will-kee/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-linkedin" />
			</a>
		</div>
	);
};

export default Footer;
