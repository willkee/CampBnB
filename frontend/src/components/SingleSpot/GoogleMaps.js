// import { Loader } from "@googlemaps/js-api-loader";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { csrfFetch } from "../../store/csrf";
// import "./GoogleMaps.css";

// const GoogleMaps = ({ spot }) => {
// 	const [apiKey, setApiKey] = useState("");
// 	const [loaded, setLoaded] = useState(false);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		const load = async () => {
// 			const res = await csrfFetch("/api/google/maps");
// 			const data = await res.json();
// 			setApiKey(data.key);
// 			setLoaded(true);
// 		};
// 		load();
// 	}, [dispatch]);

// 	if (loaded) {
// 		const loader = new Loader({
// 			apiKey: apiKey,
// 			version: "weekly",
// 			libraries: ["places"],
// 		});

// 		loader
// 			.load()
// 			.then(async (google) => {
// 				if (!spot.lat || !spot.long) {
// 					const geocoder = await new google.maps.Geocoder();
// 					await geocoder.geocode(
// 						{ address: `${spot.address} ${spot.city}` },
// 						(results, status) => {
// 							if (status === "OK") {
// 								const map = new google.maps.Map(
// 									document.getElementById("map"),
// 									{
// 										center: results[0].geometry.location,
// 										zoom: 12,
// 									}
// 								);

// 								new google.maps.Marker({
// 									position: results[0].geometry.location,
// 									map,
// 								});
// 							}
// 						}
// 					);
// 				} else {
// 					const map = new google.maps.Map(
// 						document.getElementById("map"),
// 						{
// 							center: {
// 								lat: parseFloat(spot.lat),
// 								lng: parseFloat(spot.long),
// 							},
// 							zoom: 12,
// 						}
// 					);

// 					new google.maps.Marker({
// 						position: {
// 							lat: parseFloat(spot.lat),
// 							lng: parseFloat(spot.long),
// 						},
// 						map,
// 					});
// 				}
// 			})
// 			.catch((e) => console.error("Error: ", e));
// 	}

// 	return <div id="map"></div>;
// };

// export default GoogleMaps;
