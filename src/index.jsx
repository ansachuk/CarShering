import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="CarShering">
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
