import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tabela from '../vendas/tabela'
import About from '../about/about'

export default props => (
	<Router history = { hashHistory }>
		<Route path = '/vendas' component = {Tabela} />
		<Route path = '/about' component = {About} /> 
		<Redirect from = '*' to = '/vendas' />
	</Router>
)

