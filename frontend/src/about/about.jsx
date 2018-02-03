import React, { Component } from 'react'

import axios from 'axios'

const URL = 'http://localhost:3003/api/vendas' //URL base da api no backend

export default class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			descricao: '', lista: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.adicionarEvento = this.adicionarEvento.bind(this)
		//this.atualizar = this.atualizar.bind(this)
		this.atualizar()
	}

	handleChange(evento) {
		this.setState({ ...this.state, descricao: evento.target.value });
	}

	adicionarEvento() { //handleAdd
		const descricao = this.state.descricao
		axios.post(URL, { descricao })
			.then(res => this.atualizar())
		//console.log(this.state.descricao);
	}

	atualizar() {
		axios.get(`${URL}?sort=-createdAt`)//ordem decrescente
			.then((res) => this.setState({ ...this.state, descricao: '', lista: res.data }))
	}

	render() {

		return (
			<div role='form' className='about'>
				<div className='col-xs-12 col-sm-9 col-md-10'>
					<input id='description' className='form-control'
						//descricao={this.state.descricao}
						value={this.state.descricao}
						onChange={this.handleChange}
						//handleChange={this.handleChange}
						//adicionarEvento={this.adicionarEvento}
						placeholder='Adicione um Evento'>
					</input>
				</div>

				<div className='col-xs-12 col-sm-3 col-md-2'>
					<button className='btn btn-primary' onClick={this.adicionarEvento}>
						<i className='fa fa-plus'></i>
					</button>
				</div>

				<table className='table table-striped'>
					<thead>
						<tr>
							<th>Local do Evento</th>		
							<th>Cidade</th>
							<th>Rua</th>
							<th>Inicio</th>
							<th>Data</th>
						</tr>

					</thead>

					<tbody>

						<tr>
							<td>Botecos Bar</td>
							<td>Fortaleza</td>
							<td>Rua Evento 1</td>
							<td>22:00</td>
							<td>02 - 02 - 18</td>
						</tr>

						<tr>
							<td>Bar da cocada</td>
							<td>Londrina</td>
							<td>Rua Evento 2</td>
							<td>19:00</td>
							<td>23 - 08 - 18</td>
						</tr>

						<tr>
							<td>Bar da Castanhola</td>
							<td>Beberibe</td>
							<td>Rua Evento 3</td>
							<td>23:00</td>
							<td>12 - 05 - 18</td>
						</tr>

						<tr>
							<td>Biritas Bar</td>
							<td>Lagoinha</td>
							<td>Rua Evento 4</td>
							<td>12:30</td>
							<td>09 - 10 - 18</td>
						</tr>
					</tbody>
				</table>

			</div>
		)
	}
}


