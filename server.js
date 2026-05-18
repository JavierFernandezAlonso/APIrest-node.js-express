const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas
const cursosRoutes = require("./routes/cursos.routes");

// Ruta principal
app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "API de TecnoAula Formación funcionando correctamente"
    });
});

// Rutas API
app.use("/api/cursos", cursosRoutes);

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});