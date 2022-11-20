const router = require("express").Router();
const hbs = require('hbs');
const Celebrity = require("../models/Celebrity.model");


router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
});

router.post('/celebrities/create', (req, res, next) => {
    console.log(req.body);
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchphrase: req.body.catchphrase
    })
    .then (createCelebrity => {
        res.redirect('/celebrities')
    })
    .catch(err => {
        console.log(err)
        res.render('celebrities/new-celebrity')
    })
})

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then((celebrity) => {
            res.render('celebrities/celebrities.hbs', { celebrity })
        })
        .catch((err))
})



// all your routes here

module.exports = router;