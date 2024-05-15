import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import sessionReducer from "./session";
import modalReducer from "./modal/reducer";
import spotsReducer from "./spots";

const reducer = {
	session: sessionReducer,
	spots: spotsReducer,
	modal: modalReducer,
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
