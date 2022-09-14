const express = require('express')
const app = express();
const Productos = require('./contenedor/Contenedor')
const productos = new Productos('./productos.txt')
const PORT = 8080;

app.get('/', async (req, res) => {
    prod = await productos.getAll()
    try {
        res.send(prod)
    } catch (error) {
        res.send([])
    }
})

app.get('/prodRandom', async (req, res) => {
    ranProd = await productos.getRandom()
    try {
        res.send(ranProd)
    } catch (error) {
        res.send([])
    }
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
})
server.on('error', err => console.log(err))
