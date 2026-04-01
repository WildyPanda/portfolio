import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../home/Home';
import MigrationThymeleaf from '../projects/project-pages/MigrationThymeleaf';
import AccompagnementKubernetes from '../projects/project-pages/AccompagnementKubernetes';
import ChiffrageHibernate from '../projects/project-pages/ChiffrageHibernate';
import { useEffect } from 'react';
import CV from '../cv/Cv';

const ScrollToTop = () => {
	// Get the current location object
	const { pathname } = useLocation();

	// Trigger scroll to top on route change
	useEffect(() => {
		// Scroll to top of the page
		window.scrollTo(0, 0);
	}, [pathname]); // Re-run effect when pathname changes

	return null; // This component doesn't render anything
};


function Router() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chiffrage_hibernate" element={<ChiffrageHibernate />} />
				<Route path="/migration_thymeleaf" element={<MigrationThymeleaf />} />
				<Route path="/accompagnement_kubernetes" element={<AccompagnementKubernetes />} />
				<Route path="/CV" element={<CV />} />
			</Routes>
		</>
	);
}

export default Router;
