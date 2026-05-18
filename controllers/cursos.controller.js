const cursos = require("../data/cursos");

// Obtener todos los cursos
const obtenerCursos = (req, res) => {

    let resultado = [...cursos];

    const { nombre, nivel } = req.query;

    // Buscar por nombre
    if (nombre) {
        resultado = resultado.filter(curso =>
            curso.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }

    // Filtrar por nivel
    if (nivel) {
        resultado = resultado.filter(curso =>
            curso.nivel.toLowerCase() === nivel.toLowerCase()
        );
    }

    res.status(200).json(resultado);
};

// Obtener curso por ID
const obtenerCursoPorId = (req, res) => {

    const id = parseInt(req.params.id);

    const curso = cursos.find(c => c.id === id);

    if (!curso) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    res.status(200).json(curso);
};

// Crear nuevo curso
const crearCurso = (req, res) => {

    const {
        nombre,
        descripcion,
        duracion,
        nivel,
        precio
    } = req.body;

    // Validaciones
    if (!nombre || !descripcion || !duracion) {
        return res.status(400).json({
            error: "Nombre, descripción y duración son obligatorios"
        });
    }

    if (precio && typeof precio !== "number") {
        return res.status(400).json({
            error: "El precio debe ser numérico"
        });
    }

    // Crear nuevo curso
    const nuevoCurso = {
        id: cursos.length > 0
            ? cursos[cursos.length - 1].id + 1
            : 1,
        nombre,
        descripcion,
        duracion,
        nivel: nivel || "Inicial",
        precio: precio || 0
    };

    cursos.push(nuevoCurso);

    res.status(201).json({
        mensaje: "Curso creado correctamente",
        curso: nuevoCurso
    });
};

// Actualizar curso
const actualizarCurso = (req, res) => {

    const id = parseInt(req.params.id);

    const curso = cursos.find(c => c.id === id);

    if (!curso) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    const {
        nombre,
        descripcion,
        duracion,
        nivel,
        precio
    } = req.body;

    // Actualizar solo si llegan datos
    curso.nombre = nombre || curso.nombre;
    curso.descripcion = descripcion || curso.descripcion;
    curso.duracion = duracion || curso.duracion;
    curso.nivel = nivel || curso.nivel;
    curso.precio = precio || curso.precio;

    res.status(200).json({
        mensaje: "Curso actualizado correctamente",
        curso
    });
};

// Eliminar curso
const eliminarCurso = (req, res) => {

    const id = parseInt(req.params.id);

    const indice = cursos.findIndex(c => c.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Curso no encontrado"
        });
    }

    cursos.splice(indice, 1);

    res.status(200).json({
        mensaje: "Curso eliminado correctamente"
    });
};

module.exports = {
    obtenerCursos,
    obtenerCursoPorId,
    crearCurso,
    actualizarCurso,
    eliminarCurso
};