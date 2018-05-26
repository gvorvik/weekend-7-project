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

}); //End app.get


app.post('/feedback', (req, res) => {
    let feedback = req.body;

    //query to send data to database
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [feedback.feelingRating, feedback.contentUnderstandingRating, feedback.supportRating, feedback.feedbackComment])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});//End app.post

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});