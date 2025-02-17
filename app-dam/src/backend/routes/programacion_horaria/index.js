const express = require('express');
const pool = require('../../mysql-connector');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM programacion_horaria', (err, results) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(200).send(results);
    });
});

router.post('/', (req, res) => {
    const { consumo_id, inicio, fin } = req.body;
    const query = 'INSERT INTO programacion_horaria (consumo_id, inicio, fin) VALUES (?, ?, ?)';
    pool.query(query, [consumo_id, inicio, fin], (err, result) => {
        if (err) res.status(500).send({ error: err.message });
        else res.status(201).send({ id: result.insertId });
    });
});

module.exports = router;
