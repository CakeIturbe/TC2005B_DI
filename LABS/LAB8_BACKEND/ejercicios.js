const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


function promedio(){
    var arreglo = [1,2,3,4,5,6,7,8];
    var suma = 0;
    var tamanio = 0;
    for (let item of arreglo){
        suma = suma + item;
        tamanio++;
    };
    var avg= suma/tamanio;
    return avg;
};
console.log(promedio());

const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    response.setHeader('Content-Type','text/html');
    response.write("<div> Promedio: "+ promedio() + "<div>");
    response.end();
});

server.listen(4000);
