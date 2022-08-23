const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


function promedio(){
    console.log("A continuacion insertaras cinco numero que seran parte de un arreglo.");
    var arreglo = [];
    var suma=0;
    const tamanio = 5;
    for (var i=0 ; i > tamanio; i++){
        arreglo = prompt("Inserte el numero ", i, "de el arreglo: ");
        suma = suma + arreglo[i];
    };
    const promedio= suma/tamanio;
    response.write(suma);

}


const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    response.setHeader('Content-Type','text/html');
    response.write("ME ESTOY YENDO POR LA BANQUETA HOMBRE!!");
    promedio();
    response.end();


});

server.listen(4000);
