import React from 'react'

export default props => {
    const renderLinha = () => {
        const lista = props.lista || []
        return lista.map(venda => (
            <tr>
                <td>{venda.descricao}</td>
                <td>{venda.cidade}</td>
                <td>{venda.endereco}</td>
                <td>{venda.inicio}</td>
                <td>{venda.data}</td>
            </tr>
        ))
    }
    
    return(
        
		<table className='table table-striped'>
           <thead>
                <tr>
                    <th>Local do Evento</th>		
                    <th>Cidade</th>
                    <th>Endereco</th>
                    <th>Inicio</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                {renderLinha()}
            </tbody>
        </table> 
    )
}
