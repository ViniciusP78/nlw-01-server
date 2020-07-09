import express from 'express'; // Importa o express para utilização no código

const app = express(); // Inicializa a instância do express

app.use(express.json()); // Use é utilizado para colocar um plugin no express // Express não entende o formato json por padrão

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações no back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que indentificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação, etc
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Diego"
// knex('users').where('name', 'Diego').select('*');

const users = [
    'Diego',
    'Cleyton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => { // cria uma rota // 
    const search = String(request.query.search); // o termo da query pode não ser único, podendo resultar em um array. Pode-se burlar isso transformando o resultado da query em uma string

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); // os parâmetros sempre são recebidos como string

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user); // botar return obriga a função a parar aqui
});

app.listen(3333); // o node começa a rodar pela porta determinada