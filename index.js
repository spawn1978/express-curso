// Servidor con codigo de Node
/* const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Typr', 'text/plain');
    res.end('Hello World');
});

server.listen(3000, () => {
    conssole.log('Server on port 3000');
}); */

// Servidor con framwork de Express

const express = require('express');
const app = express(); 


app.use(express.json());

app.all('/user', (req, res, next) => {
    console.log('POr aqui paso');
    next();
});


app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});
app.post('/about', (req, res) => {
    res.send('POST REQUEST RECEIVED');    
});

app.post('/user/:id', (req, res) => {
    console.log(req.body); 
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');    
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);    
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);    
});
app.listen(4000, () => {
    console.log('Server on port 4000');
});