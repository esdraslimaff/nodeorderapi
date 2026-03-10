const orderService = require('../services/orderService');

class OrderController {
    async create(req, res) {
        try {
            const order = await orderService.createOrder(req.body);
            return res.status(201).json(order);
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: 'Erro ao criar pedido.' });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const order = await orderService.getOrderById(id);
            
            if (!order) {
                return res.status(404).json({ message: 'Pedido não encontrado.' });
            }

            return res.json(order);
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    }
}

module.exports = new OrderController();
