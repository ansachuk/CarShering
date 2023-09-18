import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container/Container";

export default function Layout() {
	return (
		<>
			<header>
				header
				<NavLink to="/">home</NavLink>
				<NavLink to="/catalog">cat</NavLink>
				<NavLink to="/favorites">fav</NavLink>
			</header>
			<main>
				<Suspense fallback={<p>...Loading</p>}>
					<Container>
						<Outlet />
					</Container>
				</Suspense>
			</main>
		</>
	);
}
