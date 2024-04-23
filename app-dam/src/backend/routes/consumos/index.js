const express = require('express');
const pool = require('../../mysql-connector');

const router = express.Router();

// Obtener todos los consumos
router.get('/', (req, res) => {
    pool.query('SELECT * FROM consumos', (err, results) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(200).send(results);
    });
});

// Crear un nuevo consumo
router.post('/', (req, res) => {
    const { nombre, descripcion, estado, usuario_id } = req.body;
    const query = 'INSERT INTO consumos (nombre, descripcion, estado, usuario_id) VALUES (?, ?, ?, ?)';
    pool.query(query, [nombre, descripcion, estado, usuario_id], (err, result) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(201).send({ id: result.insertId });
    });
});

// Actualizar el estado de un consumo
router.put('/:id', (req, res) => {
    const { estado } = req.body;
    const { id } = req.params;
    const query = 'UPDATE consumos SET estado = ? WHERE id = ?';
    pool.query(query, [estado, id], (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error al actualizar el estado del consumo', details: err.message });
        } else {
            res.status(200).send({ message: 'Consumo actualizado correctamente', affectedRows: result.affectedRows });
        }
    });
});

module.exports = router;
