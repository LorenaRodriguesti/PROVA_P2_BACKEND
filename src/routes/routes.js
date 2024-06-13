const express = require('express');
const router = express.Router();

// controllers
const usuariosController = require('../controllers/usuarioController');
const categoriaController = require('../controllers/generoController');  // Atualize isso
const filmeController = require('../controllers/filmeController');
const serieController = require('../controllers/serieController');
const reviewController = require('../controllers/reviewController');

// validators
const { validarUsuario } = require('../validators/usuariovalidator');
const validarID = require('../validators/idValidator');

// categoria
router.post('/categoria', categoriaController.create);
router.get('/categoria', categoriaController.getAll);
router.get('/categoria/:id', categoriaController.getById);
router.put('/categoria/:id', categoriaController.update);
router.delete('/categoria/:id', categoriaController.remove);

// filme
router.post('/filmes', filmeController.create);
router.get('/filmes', filmeController.getAll);
router.get('/filmes/:id', validarID, filmeController.getById);
router.put('/filmes/:id', validarID, filmeController.update);
router.delete('/filmes/:id', validarID, filmeController.remove);

// serie
router.post('/series', serieController.create);
router.get('/series', serieController.getAll);
router.get('/series/:id', validarID, serieController.getById);
router.put('/series/:id', validarID, serieController.update);
router.delete('/series/:id', validarID, serieController.remove);

// avaliacao
router.post('/reviews', reviewController.create);
router.get('/reviews', reviewController.getAll);
router.get('/reviews/:id', validarID, reviewController.getById);
router.put('/reviews/:id', validarID, reviewController.update);
router.delete('/reviews/:id', validarID, reviewController.remove);

// Rotas para usuários
router.post('/usuarios', validarUsuario, usuariosController.create);
router.get('/usuarios', usuariosController.getAll);
router.get('/usuarios/:id', validarID, usuariosController.getById);
router.put('/usuarios/:id', validarID, validarUsuario, usuariosController.update);
router.delete('/usuarios/:id', validarID, usuariosController.remove);

module.exports = router;
