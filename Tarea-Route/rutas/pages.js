const express = require("express"); // Importamos Express para crear rutas
const path = require("path"); // Importamos 'path' para manejar rutas de archivos correctamente
const router = express.Router(); // Creamos un router para definir las rutas

// Ruta para la página de bienvenida (index.html)
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../entregables', 'index.html')); // Mandamos el archivo index.html al cliente
});

// Ruta para la página de la calculadora (calculadora.html)
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '../entregables', 'calculadora.html')); // Mandamos el archivo calculadora.html
});

// Ruta para la página del generador QR (generadorQR.html)
router.get('/QR', (req, res) => {
    res.sendFile(path.join(__dirname, '../entregables', 'QR.html')); // Mandamos el archivo generadorQR.html
});

module.exports = router; // Exporta el router para que pueda ser usado en app.js
