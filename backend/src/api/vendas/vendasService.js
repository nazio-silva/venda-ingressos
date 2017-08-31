const Vendas = require('./vendas')
Vendas.methods( ['get', 'post', 'put', 'delete'] )
Vendas.updateOptions({ new: true, runValidators: true })

module.exports = Vendas