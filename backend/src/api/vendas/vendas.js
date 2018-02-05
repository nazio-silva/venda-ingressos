const restful = require('node-restful')
const mongoose = restful.mongoose

const vendasSchema = new mongoose.Schema({
	descricao: { type: String, required: true },
	//cidade: { type: String, required: true },
	//quantidade: { type: String, required: true, default: false },
	//ingresso: { type: String, required: true },
	concluido: { type: Boolean, required: true, default: false },
	createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Vendas', vendasSchema)