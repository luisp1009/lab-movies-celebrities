const router = require("express").Router();
const hbs = require('hbs');
const Movie = require('../models/Movie.model')
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/movies/create", (req, res, next) => {
    Celebrity.find().then((celebrity) => {
      res.render("movies/new-movie.hbs", { celebrity });
    });
  });

router.post('/movies/create', (req, res, next) => {
    console.log(req.body);
    Celebrity.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    })
    .then ((createMovie) => {
        res.redirect("/movies");
    })
    .catch(() => res.render("movies/new-movie"));
});


router.get("/movies", (req, res, next) => {
    Movie.find()
      .then((movies) => {
        console.log(movies);
        res.render("movies/movies", { movies });
      })
      .catch((err) => console.log(err));
  });
  

  router.get("/movies/:id", (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
      .populate("cast")
      .then((foundMovie) => {
        res.render("movies/movie-details", foundMovie);
      })
      .catch((err) => console.log(err));
  });

module.exports = router;