import { configureStore } from "@reduxjs/toolkit";

import spotsReducer from "./spots/reducer";
import modalReducer from "./modal/reducer";
import sessionReducer from "./session/reducer";
import favoriteReducer from "./favorites/reducer";

const reducer = {
	session: sessionReducer,
	spots: spotsReducer,
	modal: modalReducer,
	favorites: favoriteReducer,
};

let logger;
if (process.env.NODE_ENV !== "production") {
	const { createLogger } = require("redux-logger");
	logger = createLogger();
}

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => {
		if (process.env.NODE_ENV !== "production") {
			return getDefaultMiddleware().concat(logger);
		}
		return getDefaultMiddleware();
	},
});

export default store;
