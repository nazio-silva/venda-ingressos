import React, { Component } from 'react'

export default class Contador extends Component {
	constructor(props) {
		super(props)
			this.state = { 
				contador: 0,
		}

		this.diminuir = this.diminuir.bind(this);
		this.aumentar = this.aumentar.bind(this);	
	}

	aumentar(){
		const contagem = this.state.contador;
			this.setState({contador:contagem + 1});
	}
	
	diminuir(){
		if(this.state.contador > 0){
			const contagem = this.state.contador;
			this.setState({contador:contagem - 1});
		}	
	}

	render() {
		
		return (
			<div className = 'btn-group-small'>
				
				<button type = 'button' className = 'btn btn-primary' 
					onClick={this.aumentar}> + </button>
						{this.state.contador}
				<button type = 'button' className = 'btn btn-danger' 
					onClick={this.diminuir}> - </button>
				<td>{this.state.contador}</td>
			</div>
		);
	}
}