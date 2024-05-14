import { useLocation } from "react-router-dom";
import {
	SignUpButton,
	LogInButton,
	NewSpotButton,
	SearchButton,
	ExploreButton,
} from "./NavUtils";

import styles from "./Navigation.module.css";

const NavWidescreen = ({ sessionUser }) => {
	return (
		<div className={styles.right_wide}>
			<ExploreButton />
			<SearchButton />
			{sessionUser ? (
				<NewSpotButton />
			) : (
				<>
					<SignUpButton />
					<LogInButton />
				</>
			)}
		</div>
	);
};

export default NavWidescreen;
