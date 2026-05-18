const express = require("express");

const router = express.Router();

const {
    obtenerCursos,
    obtenerCursoPorId,
    crearCurso,
    actualizarCurso,
    eliminarCurso
} = require("../controllers/cursos.controller");

// Obtener todos los cursos
router.get("/", obtenerCursos);

// Obtener curso por ID
router.get("/:id", obtenerCursoPorId);

// Crear curso
router.post("/", crearCurso);

// Actualizar curso
router.put("/:id", actualizarCurso);

// Eliminar curso
router.delete("/:id", eliminarCurso);

module.exports = router;