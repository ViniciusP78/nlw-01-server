import express from 'express'; // Importa o express para utilização no código
import routes from './routes';

const app = express(); // Inicializa a instância do express

app.use(express.json()); // Use é utilizado para colocar um plugin no express // Express não entende o formato json por padrão
app.use(routes);

app.listen(3333); // o node começa a rodar pela porta determinada