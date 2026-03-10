require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Sem argumentos, ele lerá automaticamente do .env e do schema gerado
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL // O Node passa a URL para o Prisma
});

class OrderRepository {
    async save(data) {
        return await prisma.order.create({
            data: {
                orderId: data.orderId,
                value: data.value,
                creationDate: data.creationDate,
                items: {
                    create: data.items
                }
            },
            include: { items: true }
        });
    }

    async findById(id) {
        return await prisma.order.findUnique({
            where: { orderId: id },
            include: { items: true }
        });
    }
}

module.exports = new OrderRepository();