//Node Codigo Asíncrono
setTimeout(() => {console.log("Van cuatro segundos")}, 4000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');
console.log("hola desde node")

const arreglo =[5000,60,90,100,10,20,10000,0,120,2000,340,1000,50,9000];
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    response.setHeader('Content-Type','text/html');
    response.write("ME ESTOY YENDO POR LA BANQUETA HOMBRE!!");
    response.end();

});

server.listen(3000);

