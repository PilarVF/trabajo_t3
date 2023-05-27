/* María del Pilar Vaquero Fernández
   Mayo de 2023
   Trabajo del Tercer Trimestre de la asignatura Lenguajes de Marcas */

'use strict'

/* Función que recupera el valor del elemento HTML con el id 'nombre', y almacena ese valor en la sessionStorage del navegador 
   utilizando la clave "--usuario". */
function guardarAjustes() { // sessionStorage almacena datos en la sesión del usuario mientras navega por el sitio web
    const nombre = document.getElementById('nombre').value;
    window.sessionStorage.setItem("--usuario", nombre); 
    activarAjustes();
}

activarAjustes();

/* Función que recupera el valor almacenado en sessionStorage utilizando la clave "--usuario". 
   Si hay un valor almacenado, actualiza el contenido del elemento HTML con el id 'usuario' para mostrar un saludo personalizado 
   utilizando el nombre almacenado. */
function activarAjustes() {
    let usuario = window.sessionStorage.getItem("--usuario");
    if (usuario) {
        document.getElementById('usuario').innerHTML = "Hola, " + usuario + " 👋";
        const ajustesNombre = document.getElementById('nombre');
        if (ajustesNombre) {
            ajustesNombre.value = usuario;
        }
    }
}