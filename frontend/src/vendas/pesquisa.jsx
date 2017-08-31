import React from 'react';

export default props => (
//Sempre use ClassName
	
	<div className = 'container'>
			<form action = '#' className = 'navbar-form'>
				<h4>
					<strong> Total R$: <input type = 'text' 
						className = 'form-control' placeholder = 'Valor Total'/>
					</strong>

					<strong> Boleto: </strong>
					<button className="btn btn-primary">
						<span className = "glyphicon glyphicon-save"></span>
					</button>
				</h4>

				<br />

				<strong> Código: <input type = 'text' 
						className = 'form-control' placeholder = 'Código da Compra' />
				</strong>

				<strong> Baixar Ingresso: </strong>
					<button className="btn btn-primary">
						<span className = "glyphicon glyphicon-save"></span>
					</button>

			</form>
	</div>
)  

