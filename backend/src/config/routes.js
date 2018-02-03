const express = require('express')

module.exports = function (server) {
	const router = express.Router()
	//rota padrao
	server.use('/api', router) 

	const vendasService = require('../api/vendas/vendasService')
	//localhost:3003/api/vendas
	vendasService.register(router, '/vendas')
}