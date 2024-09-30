const { Router } = require('express');
const FoodsController = require('../controllers/FoodsController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const ensureAdmin = require('../middlewares/ensureAdmin');

const foodsRoutes = Router();
const foodsController = new FoodsController();

foodsRoutes.use(ensureAuthenticated); 
foodsRoutes.post('/', ensureAdmin, foodsController.create); 
foodsRoutes.put('/:id', ensureAdmin, foodsController.update); 
foodsRoutes.delete('/:id', ensureAdmin, foodsController.delete); 
foodsRoutes.get('/', foodsController.index); 
foodsRoutes.get('/:id', foodsController.show); 

module.exports = foodsRoutes;
