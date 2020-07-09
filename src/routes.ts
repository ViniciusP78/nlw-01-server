import express from 'express';

const routes = express.Router(); // desacopla as rotas do arquivo principal para um outro arquivo

routes.get('/', (request, response) => { // cria uma rota // 
    return response.json({message: 'Hello World'});
});

export default routes;