import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";

const MainPage = lazy(() => import("/src/pages/MainPage/MainPage.jsx"));
const CatalogPage = lazy(() => import("/src/pages/CatalogPage/CatalogPage.jsx"));
const FavoritePage = lazy(() => import("/src/pages/FavoritePage/FavoritePage.jsx"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="catalog" element={<CatalogPage />} />
				<Route path="favorites" element={<FavoritePage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
}

export default App;
