import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router(); // desacopla as rotas do arquivo principal para um outro arquivo
const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// index, show, create, update, delete

export default routes;