import { useDispatch } from "react-redux";
import Filter from "/src/components/Filter/Filter";
import { getAll } from "../../toolkit/operations/carsOperations";

export default function CatalogPage() {
	const disp = useDispatch();
	return (
		<>
			CatalogPage
			<Filter />
			<button onClick={() => disp(getAll())}>click</button>
		</>
	);
}
