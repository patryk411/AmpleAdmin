const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})

app.get('/', (req, res) => {
    res.json("From backend");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, designation, location, age } = req.body;
    const sql = `UPDATE users SET name=?, designation=?, location=?, age=? WHERE id=?`;
    db.query(sql, [name, designation, location, age, id], (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

app.listen(8081, () => {
    console.log('listening');
});
