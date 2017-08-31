const express = require ('express')

module.exports = function(server) {
	const router = express.Router()
		server.use('/api', router)
	const vendasService = require('../api/vendas/vendasService')
	vendasService.register(router, '/vendas')
}