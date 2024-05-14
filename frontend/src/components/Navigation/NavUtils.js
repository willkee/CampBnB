import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { showModal, currentModal } from "../../store/modal";

import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import SearchInput from "../Search/Input";
import { NavLink, useLocation } from "react-router-dom";

import {
	Campground,
	MagnifyingGlassLocation,
	LocationPlus,
	FaceSmilePlus,
	ArrowRightToBracket,
} from "../../assets/icons";
import ProfileButton from "./ProfileButton";

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
		dispatch(currentModal(SignUpForm));
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
		dispatch(currentModal(LoginForm));
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
			<ProfileButton />
		</>
	);
};

export const SearchButton = () => {
	const dispatch = useDispatch();

	const displaySearchInput = () => {
		dispatch(currentModal(SearchInput));
		dispatch(showModal());
	};
	return (
		<div className={styles.search} onClick={displaySearchInput}>
			<MagnifyingGlassLocation />
			Search
		</div>
	);
};
