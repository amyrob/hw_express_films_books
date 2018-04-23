const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

//INDEX
filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

// CREATE
filmsRouter.post('/', function (req, res) {
  filmsData.add(req.body.film);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

//SHOW
filmsRouter.get('/:id', function (req, res) {
  const film = filmsData.find(req.params.id);
  res.json({films: film});
});


// UPDATE
filmsRouter.put('/:id', function (req, res) {
  filmsData.update(req.params.id, req.body.film);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

//DESTROY
filmsRouter.delete('/:id', function (req, res) {
  filmsData.delete(req.params.id);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});


module.exports = filmsRouter;
