const { Router } = require('express');
const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', async (req, res) => await usersController.create(req, res)); 

usersRoutes.put('/:id', ensureAuthenticated, async (req, res) => await usersController.update(req, res)); 

module.exports = usersRoutes;
