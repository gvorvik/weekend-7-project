const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/feedback', (req, res) => {
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post('/feedback', (req, res) => {
    console.log(req.body);
    res.send('Post got got');
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});