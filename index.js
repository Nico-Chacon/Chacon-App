const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola desde mi API academica!');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
