// ./src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import CRUD from './components/CRUD'
import Layout from './components/Layout'
import Countries from './components/Countries'
import Country from './components/Country'

import data	from './countries.json'


// 2. FUNCIÓN
const Router = () => {

	// ARQUITECTURA DE ROUTING EN REACT
	return (
		<>
			<BrowserRouter>
				<Routes>

					{/* RUTA PADRE / PARENT ROUTE */}
					<Route path="/" element={<Layout />}>
						{/* localhost:3000/ */}
						{/* index es usar el path de la ruta padre */}
						<Route index element={<Home />} />
						{/* localhost:3000/crud */}
						<Route path="crud" element={<CRUD />} />
						{/* localhost:3000/countries */}
						<Route path="countries" element={<Countries allCountries={data} />}>
							{/* CHILDREN ROUTES de /countries */}
							{/* localhost:3000/countries/MEX */}
							{/* localhost:3000/countries/COL */}
							{/* localhost:3000/countries/PER */}
							{/* localhost:3000/countries/USA */}
							{/* localhost:3000/countries/... */}
							<Route path=":id" element={<Country allCountries={data}/>} />
						</Route>

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)

}

// 3. EXPORTACIÓN
export default Router