import React, { Component } from 'react'
import Contador from './contador'
import Cabecalho from './cabecalho'
import PageHeader from '../template/pageHeader'
import Finalizar from './finalizar'

//import Props from './props' //Passando paramentros

export default class Tabela extends Component { 
	constructor(props) {
		super(props)
			this.state = { 
				//value: ''
		}	
	}
	
	render() { 
		return (
			<div>

				<Cabecalho />

				<table className = 'table table-striped'>
				    	<thead>
					    	<tr>
					    		<th>Quantidade</th>
					    		<th>Tipo de Ingresso</th>
					    		<th>Sexo</th>
					    		<th>Lote</th>
					    		<th>Preço</th>
					    		<th>Taxa</th>
					    		<th>Sub-Total</th>
					    	</tr>

					    </thead>

					    <tbody>
					    	<tr>
					    		<td>
								 	<Contador/> 
								</td>

					    		<td>Lounge Inteira</td>
					    		<td><i className = 'fa fa-male' arial-hidden = 'true'></i></td>
					    		<td>1</td>
					    		<td>260,00</td>
					    		<td>39,00</td>								    	
					    		<td>0.00</td>
								
					    	</tr>

					    		<tr>
						    		<td>
									    <Contador/>
									</td>

						    		<td>Lounge Meia</td>
						    		<td><i className = 'fa fa-male' arial-hidden = 'true'></i></td>
						    		<td>1</td>
						    		<td>195,00</td>
						    		<td>29,25</td>
						    		<td>0,00</td>
					    		</tr>

					    		<tr>
						    		<td>
									   <Contador/>
									</td>

						    		<td>Lounge Inteira</td>
						    		<td><i className = 'fa fa-female' arial-hidden = 'true'></i></td>
						    		<td>1</td>
						    		<td>200,00</td>
						    		<td>30,00</td>
						    		<td>0,00</td>
					    		</tr>

					    	<tr>
					    		<td>
								     <Contador/>
								</td>

					    		<td>Lounge Meia</td>
					    		<td> <i className = 'fa fa-female' arial-hidden = 'true'></i> </td>
					    		<td>1</td>
					    		<td>150,00</td>
					    		<td>22,50</td>
					    		<td>0,00</td>
					    	</tr>
					    </tbody>	
				</table>
				
				<Finalizar />
				<PageHeader />

			</div>
		 ); 
	} 
}