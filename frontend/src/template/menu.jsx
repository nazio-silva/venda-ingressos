import React from 'react'
//Componente de menu
export default props => (
	
	<nav className = 'navbar navbar-inverse bg-inverse'>
		<div className = 'container'>
			<div className = 'navbar-header'>
				<a className = 'navbar-brand' href = '#'>
					<i className = 'fa fa-calendar-check-o'></i> EventShow
				</a>
			</div>

			<div id = 'navbar' className = 'navbar-collapse collapse'>
				<ul className = "nav navbar-nav">
					<li><a href = '#/vendas'> Ingressos </a></li>
					<li><a href = '#/about'> Eventos </a></li>
				</ul>
			</div>
		</div>
	</nav>
)