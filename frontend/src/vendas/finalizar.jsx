import React, { Component } from 'react'

export default class Finalizar extends Component {
	constructor(props) {
		super(props) 
			this.state = {

			}
		this.alertaFinaliza = this.alertaFinaliza.bind(this);
		this.alertaCancela = this.alertaCancela.bind(this);
	}

	alertaFinaliza(){
		alert("Por favor, realize o pagamento para fazer o Download dos ingressos!");
	}

	alertaCancela(){
		alert("Compra Cancelada com Sucesso!! :(");
	}

	render() {

		return (

			<div className = 'btn-group-small'>
			
				<button type = 'button' className = 'btn btn-primary' 
					onClick = {this.alertaFinaliza}> Finalizar </button>

				<button type = 'button' className = 'btn btn-danger'
					onClick = {this.alertaCancela}> Cancelar </button>

			</div>
		);
	}
}

