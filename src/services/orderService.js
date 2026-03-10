const orderRepository = require('../repositories/orderRepository');

class OrderService {
    async createOrder(data) {
        const mappedOrder = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: new Date(data.dataCriacao),
            items: data.items.map(item => ({
                productId: parseInt(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        };

        return await orderRepository.save(mappedOrder);
    }

    async getOrderById(id) {
        return await orderRepository.findById(id);
    }
}

module.exports = new OrderService();