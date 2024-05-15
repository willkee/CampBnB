import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { modalMount } from "./store/modal";

// Redux Store
import store from "./store";

import App from "./App";
import "./index.css";

if (process.env.NODE_ENV !== "production") {
	restoreCSRF();

	window.csrfFetch = csrfFetch;
	window.store = store;
	window.sessionActions = sessionActions;
}

function Root() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Root />
		</Provider>
	</React.StrictMode>
);
