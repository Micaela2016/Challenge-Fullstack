const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OreoyLuma154',
    database: 'challengue'
});

// Route
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// all clients
app.get('/clients', (req, res) => {
  const sql = 'SELECT * FROM clients';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/clients/:id', (req, res) => {
    const {id} =req.params;
    const sql = `SELECT * FROM clients WHERE idclients =${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});

app.get('/operations', (req, res) => {
    const sql = `SELECT * FROM operations`;
    connection.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});


app.get('/category', (req, res) => {
    const sql = `SELECT * FROM category`;
    connection.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    });
});

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO clients SET ?';

    const clientObj = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    connection.query(sql, clientObj, error => {
        if (error) throw error;
        res.send('Client created!');
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { password, name } = req.body;
    const sql = `UPDATE customers SET name = '${name}', password='${password}' WHERE id =${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Client updated!');
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM clients WHERE id= ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Delete client');
    });
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));