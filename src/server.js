const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json()); // Middleware para ler JSON

// Rotas
app.use('/order', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});