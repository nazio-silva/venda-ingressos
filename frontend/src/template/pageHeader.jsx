import React from 'react'
import Pesquisa from '../vendas/pesquisa'

export default props => (
	<div>
		<header className = 'page-header'>
			<h2>{props.name} <small>{props.small}</small></h2>
		</header>

			<Pesquisa />
			
		<header className = 'page-header'>
			<h2>{props.name} <small>{props.small}</small></h2>
		</header>
	</div>
)