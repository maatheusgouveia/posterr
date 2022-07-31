import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import DefaultLayout from '../components/_layouts/Default';

export default function AppRoutes() {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<DefaultLayout>
						<Home />
					</DefaultLayout>
				}
			/>

			<Route
				path="/*"
				element={
					<DefaultLayout>
						<h1>Page not found</h1>
					</DefaultLayout>
				}
			/>
		</Routes>
	);
}
