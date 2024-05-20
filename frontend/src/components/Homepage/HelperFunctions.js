import { CarMirrors, RV, Tent, Backpack } from "../../assets/icons";

export const getTypeIcon = (type) => {
	switch (type) {
		case "vehicle":
			return <CarMirrors />;
		case "rv":
			return <RV />;
		case "tent":
			return <Tent />;
		case "backpacking":
			return <Backpack />;
		default:
			return null;
	}
};

export const processName = (name) => {
	const cleanedName = name.replace(/Campground/g, "").trim();
	return cleanedName.length > 20
		? cleanedName.slice(0, 20) + "..."
		: cleanedName;
};

export const processCity = (city) => {
	return city.length > 20 ? city.slice(0, 20) + "..." : city;
};

export const ImageHandler = ({ img }) => {
	return (
		<img
			src={img}
			alt="spot"
			width="100px"
			onError={(e) => {
				e.onerror = null;
				e.target.src =
					"https://campbnb.s3.us-west-1.amazonaws.com/placeholder.jpeg";
			}}
		/>
	);
};
