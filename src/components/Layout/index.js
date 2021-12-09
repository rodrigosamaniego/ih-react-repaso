// ./src/components/Layout/index.js

import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
	return (
		<>
			<Header />
				
				{/* EL OUTLET SON TODOS LOS COMPONENTES HIJOS (CHILDREN) DE LA ROUTA PADRE, DEPENDIENDO DEL PATH */}
				{/* SI ESTOY EN http://localhost:3000/crud, ENTONCES OUTLET VA A SER <CRUD /> */}
				<Outlet />

			<Footer />	
		</>
	)
}