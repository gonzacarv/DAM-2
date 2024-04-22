const express = require('express');
const pool = require('../../mysql-connector');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM consumos', (err, results) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(200).send(results);
    });
});

router.post('/', (req, res) => {
    const { nombre, descripcion, estado, usuario_id } = req.body;
    const query = 'INSERT INTO consumos (nombre, descripcion, estado, usuario_id) VALUES (?, ?, ?, ?)';
    pool.query(query, [nombre, descripcion, estado, usuario_id], (err, result) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(201).send({ id: result.insertId });
    });
});

module.exports = router;
