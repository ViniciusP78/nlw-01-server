import express from 'express'; // Importa o express para utilização no código

const app = express(); // Inicializa a instância do express

const users = [
    'Diego',
    'Cleyton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => { // cria uma rota // 
    console.log('Listagem de usuários');

    return response.json(users);
});

app.get('/users/:id', (request, response) => {
    
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    };

    return response.json(user); // botar return obriga a função a parar aqui
});

app.listen(3333); // o node começa a rodar pela porta determinada