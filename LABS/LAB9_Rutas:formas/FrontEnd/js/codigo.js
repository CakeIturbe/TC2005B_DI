
//variables__________________

//FORMA MODERNA DE DECLARAR VARIABLES
//EL ALCANCE ES A NIVEL DE BLOQUE {}
let pulpo_mundial = "Paul";

//FORMA CLASICA DE DECLARAR VARIABLES
//EL ALCANCE ES A NIVEL DE FUNCION
var pulpo_boys = "Thimoty";

const precio_toros = 199.99

console.log(pulpo_mundial);

for (let i = 0;i < 10;i++) {
    console.log(i);
}

//LA SIGUIENTE LINEA MARCA ERROR YA QUE i MURIO
// EN EL BLOQUE ANTERIOR
//console.log(i);

// for (var i = 0;i < 10;i++) {
//     console.log(i);
// }

// console.log(i);

console.info("Esto es informacion");
console.warn("Cuidado");
console.error("error");
console.assert(2 === 1);
console.log("Precio: ", precio_toros);
alert("Debes ser mayor de 18 años para acceder a este sitio. ")

const nombre= prompt("Como te llamas? ");
console.log("Hola " + nombre + "!");

const hambre= confirm("tienes hambre? ");
if(hambre){
    alert("Ya mero es la hora de la comida");
}
else{
    alert("tienes que comer bien " + nombre);
}

//FUNCIONES TRADICIONALES____________
function comer(){
    const comida = "Picadillo";
    console.log(comida);
    return true;
}

const comida = comer;

// if(hungry){
//     alert("Ya mero es la hora de la comida");
//     comida();
// }
// else{
//     alert("tienes que comer bien " + nombre);
// }

//Funciones modernas
const anon = () => console.log("anonimo");
anon();
const platillo_fuerte = (platillo) => {
    console.log("El " + platillo + "esta delicioso");

}

platillo_fuerte("tamal oaxaqueño");

//ARREGLOS____________________

const catalogo = ["Elemento","elemento2","Elemento3"];
console.log(catalogo);


//in itera sobre los indices del arreglo
for (let p in catalogo){
    console.log(catalogo[p])
}

//of obtiene cada uno de los elementos del arreglo
for (let p of catalogo){
    console.log(p);
}

catalogo[10]="Cardeno";
console.log(catalogo);

catalogo.length=2;
console.log(catalogo);

catalogo.push("Comida");
console.log(catalogo);

catalogo["postre"]="pastel";

//HTML dinamico con eventos
const boton=document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!")
    document.getElementById("contenedor_imagen").innerHTML = '<img id="image1" src="media/ringo.jpg" alt="Imagen de perro">';
}

const boton_cambio_animo=document.getElementById("boton_animo");

boton_cambio_animo.onclick = () => {
    console.log("Click!")
    document.getElementById("contenedor_imagen").innerHTML = '<img id="image1" src="media/ringo.jpg" alt="Imagen de perro">';
}