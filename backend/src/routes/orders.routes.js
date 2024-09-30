const { Router } = require('express');
const OrdersController = require('../controllers/OrdersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated"); 

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.post('/', ensureAuthenticated, ordersController.create); 
ordersRoutes.put('/:id/status', ensureAuthenticated, ordersController.updateStatus); 
ordersRoutes.get('/', ensureAuthenticated, ordersController.index); 
ordersRoutes.get('/:id', ensureAuthenticated, ordersController.show); 

module.exports = ordersRoutes;
