import express from 'express'; // Importa o express para utilização no código
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express(); // Inicializa a instância do express

app.use(cors());
app.use(express.json()); // Use é utilizado para colocar um plugin no express // Express não entende o formato json por padrão
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Permite o acesso a arquivos estáticos do sistema

app.listen(3333); // o node começa a rodar pela porta determinada