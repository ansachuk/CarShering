import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../../toolkit/operations/carsOperations";

import { selectAllCars } from "../../toolkit/selectors/carsSelectors.js";

// import Filter from "../../components/Filter/Filter";
import CardList from "../../components/CardList/CardList";

export default function CatalogPage() {
	const disp = useDispatch();
	const allCars = useSelector(selectAllCars);

	useEffect(() => {
		if (!allCars.length) {
			disp(getAll());
		}
	}, [allCars.length, disp]);

	return (
		<>
			{/* <Filter /> */}
			<CardList list={allCars} />
		</>
	);
}
