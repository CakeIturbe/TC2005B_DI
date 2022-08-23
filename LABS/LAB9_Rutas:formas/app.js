//Node Codigo Asíncrono
setTimeout(() => {console.log("Van cuatro segundos")}, 4000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');
console.log("hola desde node")

const arreglo =[5000,60,90,100,10,20];
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    if (request.url === "/hola"){
        response.setHeader('Content-Type','text/html');
        response.write("<!DOCTYPE html>");
        response.write("Hola mundo desde node, esta es la ruta de saludo");
        response.end();
    }
    else if (request.url === "/trivia" && request.method === "GET"){
        response.setHeader('Content-Type','text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Pregunta al pulpo quien va a ganar</h1>');
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Equipos</legend>');
        response.write('<label for="visitante">Visitante</label><input type="text" name="visitante" id="visitante">');
        response.write('<br></br>')
        response.write('<label for="local">Local</label><input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Adivina">');
        response.write('</form>');
        response.end();
    }
    else if (request.url === "/trivia" && request.method === "POST"){

        const datos = [];
        request.on('data', (dato) => {
                console.log(dato);
                datos.push(dato);
                
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato= datos_completos.split('&')[0].split('=')[1];
            console.log(nuevo_dato);
            const nuevo_local= datos_completos.split('&')[1].split('=')[1];
            console.log(nuevo_local);
            response.setHeader('Content-Type','text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>');
            response.write('<h1>El resultado es: </h1>');
            if (Math.floor(Math.random() * 2) == 0){
                response.write('<h2>' + nuevo_dato + '</h2>');
            }
            else{
                response.write('<h2>' + nuevo_local + '</h2>');
            }
            
            return response.end();
        })
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type','text/html');
        response.write("<!DOCTYPE html>");
        response.write("<h1>Error 404, el recurso solicitado no existe :(</h1>");
        response.end();
    }

});

server.listen(3000);

