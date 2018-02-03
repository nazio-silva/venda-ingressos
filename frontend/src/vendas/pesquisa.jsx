import React from 'react';

export default props => (
//Sempre use ClassName
	
	<div className = 'container'>
			<form action = '#' className = 'navbar-form'>
				<h4>
					<strong> Total R$: <input type = 'text' 
						className = 'form-control' placeholder = 'Valor Total'/>
					</strong>

					<strong style={{marginLeft: 150, padding: 10}}> Boleto: </strong>
					<button className="btn btn-primary">
						<span className = "glyphicon glyphicon-save"></span>
					</button>
				</h4>

				<br />

				<strong> 
					Código: 
					<input type = 'text' style={{marginLeft: 28}} className = 'form-control' placeholder = 'Código da Compra' />
				</strong>

				<strong style={{marginLeft: 150, padding: 10}}> Baixar Ingresso: </strong>
					<button className="btn btn-primary">
						<span className = "glyphicon glyphicon-save"></span>
					</button>

			</form>
	</div>
)  

