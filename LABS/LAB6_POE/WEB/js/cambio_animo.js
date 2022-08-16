const boton_cambio_animo=document.getElementById("cambiar_animo");

let is_happy=true

const feliz = () => {

    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img id="image1" src="media/RINGOFELIZ.jpg" alt="Imagen de perro" width="400">';
    boton_cambio_animo.innerText = ":)"
    boton_cambio_animo.style.backgroundColor = "#fbc02d"
    is_happy=true
    document.body.style.color= "#ffff00"
}

const triste = () => {

    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img id="image1" src="media/ringo.jpg" alt="Imagen de perro" width="400">';
    boton_cambio_animo.innerText = ";)"
    is_happy=false
    boton_cambio_animo.style.backgroundColor = "#5e35b1"
}

//default de la pagina
feliz();

boton_cambio_animo.onclick = () => {
    //console.log("Funciona el boton de cambio de animo")
    if (is_happy){
        triste();
    } else {
        feliz();
    }
}