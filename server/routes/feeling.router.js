const router = require('express').Router();

const pool = require('../modules/pool');



router.get('/', (req, res) => {

    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
    });

});


router.post('/', (req, res) => {
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
});

router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id
    const queryText = 'DELETE FROM "feedback" WHERE "id" = $1';
    pool.query(queryText, [idToDelete])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});

module.exports = router;