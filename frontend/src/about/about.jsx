import React, { Component } from 'react'

import Props from '../vendas/props'

import axios from 'axios'

const URL = 'http://localhost:3003/api/vendas' //URL base da api no backend

export default class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			descricao: '', lista: [],
			//cidade: '', lista: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.adicionar = this.adicionar.bind(this)		
		this.atualizar()
	}

	//pegando o valor do input que esta sendo digitado 
	handleChange(evento) { 
		this.setState({ ...this.state, descricao: evento.target.value });		
		//this.setState({ ...this.state, cidade: evento.target.value });		
	}

	adicionar() { //handleAdd
		const descricao = this.state.descricao
		//const cidade = this.state.cidade
		axios.post(URL, {  descricao })
			.then(res => this.atualizar())
		console.log("Local adicionado: " + this.state.descricao);
		//console.log("Cidade adicionada: " + this.state.cidade);
	}

	atualizar() { //Pesquisa
		axios.get(`${URL}?sort=-createdAt`)//ordem decrescente
			.then((res) => this.setState({ 
				...this.state, descricao: '', lista: res.data
				//...this.state, cidade: '', lista: res.data 
			}))
	}


	render() {
		
		return (
			
			<div role='form' className='about'>
				<div className='col-xs-12 col-sm-9 col-md-10'>
					<input id='description' className='form-control'				
						value={this.state.descricao}
						onChange={this.handleChange}
						placeholder='Adicione um Evento'>
					</input> 

						<br/>

					<input id='cidade' className='form-control'				
						value={this.state.cidade}
						onChange={this.handleChange}
						placeholder='Adicione uma cidade'>
					</input>
				</div>

				<div className='col-xs-12 col-sm-3 col-md-2'>
					<button className='btn btn-primary' onClick={this.adicionar}>
						<i className='fa fa-plus'></i>
					</button>
				</div>					

				<Props lista={this.state.lista}/>

			</div>
		)
	}
}


