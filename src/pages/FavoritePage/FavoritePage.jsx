import { useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import { selectFavorites } from "../../toolkit/selectors/carsSelectors";

export default function FavoritePage() {
	const allFavorites = useSelector(selectFavorites);
	return <>{allFavorites.length ? <CardList list={allFavorites} /> : <div>No cars</div>}</>;
}
