import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal, setCurrentModal } from "../../store/modal/actions";
import Menu from "./Menu";
import styles from "./Navigation.module.css";

import {
	Campground,
	MagnifyingGlassLocation,
	LocationPlus,
	FaceSmilePlus,
	ArrowRightToBracket,
} from "../../assets/icons";

export const ExploreButton = () => {
	const location = useLocation();

	return location.pathname !== "/main" ? (
		<NavLink className={styles.explore_button} to="/main">
			<Campground />
			<span>Explore</span>
		</NavLink>
	) : null;
};

export const SignUpButton = () => {
	const dispatch = useDispatch();

	const displaySignupForm = () => {
		dispatch(setCurrentModal("SIGN_UP_FORM", null));
		dispatch(showModal());
	};

	return (
		<div className={styles.sign_up} onClick={displaySignupForm}>
			<FaceSmilePlus />
			Sign Up
		</div>
	);
};

export const LogInButton = () => {
	const dispatch = useDispatch();

	const displayLoginForm = () => {
		dispatch(setCurrentModal("LOGIN_FORM", null));
		dispatch(showModal());
	};
	return (
		<div className={styles.log_in} onClick={displayLoginForm}>
			<ArrowRightToBracket />
			Log In
		</div>
	);
};

export const NewSpotButton = () => {
	return (
		<>
			<NavLink className={styles.add_new} to="/spots/new">
				<LocationPlus />
				<span>Add New Spot</span>
			</NavLink>
			<Menu />
		</>
	);
};

export const SearchButton = () => {
	const dispatch = useDispatch();

	const displaySearchInput = () => {
		dispatch(setCurrentModal("SEARCH_INPUT", null));
		dispatch(showModal());
	};
	return (
		<div className={styles.search} onClick={displaySearchInput}>
			<MagnifyingGlassLocation />
			Search
		</div>
	);
};
