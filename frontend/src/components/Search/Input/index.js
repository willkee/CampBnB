import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideModal } from "../../../store/modal/actions";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		setErrors([]);

		if (!search) return setErrors(["Please enter a search query."]);
		if (search.includes("%")) {
			setErrors(["Please do not use the '%' symbol."]);
			setSearch("");
			return;
		}
		if (search.length > 200) {
			setErrors(["Please keep your search query within 200 characters."]);
			setSearch("");
			return;
		}

		navigate(`/search/${encodeURIComponent(search)}`);
		setSearch("");
		dispatch(hideModal());
		return;
	};
	return (
		<div className={styles.container}>
			<h2>Search Campsites</h2>
			{errors.length > 0 && (
				<div className={styles.errors}>
					{errors.map((error) => (
						<div key={error}>{error}</div>
					))}
				</div>
			)}
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				></input>
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchInput;
