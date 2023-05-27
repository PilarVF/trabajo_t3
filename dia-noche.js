/* María del Pilar Vaquero Fernández
   Mayo de 2023
   Trabajo del Tercer Trimestre de la asignatura Lenguajes de Marcas */

'use strict'

// La variable modo se inicializa llamando a la función leerModoActual():
var modo = leerModoActual();

/* Si el modo actual es "dia", se llama a la función ponerModoDia(), que establece el estilo de la página para el modo "día". 
   De lo contrario, se llama a la función ponerModoNoche(), que establece el estilo para el modo "noche". */
if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

/* Función que recupera el modo almacenado en localStorage utilizando la clave "--modoGuardado". 
   Si no se encuentra ningún valor en localStorage, se obtiene el modo del estilo CSS personalizado --modoGuardado del elemento raíz. 
   Luego, se devuelve el modo actual. */
function leerModoActual() {
    let modo = window.localStorage.getItem("--modoGuardado");

    if (!modo) {
        modo = document.documentElement.style.getPropertyValue("--modoGuardado");
    }

    return modo;
}

// Función que establece el estilo de la página para el modo "día":
function ponerModoDia() {
    // Letra oscura sobre fondo blanco
    let todo = document.getElementById("todo");
    todo.style.color = "black";
    todo.style.backgroundColor = "white";
    window.localStorage.setItem("--modoGuardado", "dia");

    // Emoticono del sol oculto
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";

    // Se muestra el emoticono de la luna
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

// Función que establece el estilo de la página para el modo "noche": 
function ponerModoNoche() {
    // Letra clara sobre fondo oscuro
    let todo = document.getElementById("todo");
    todo.style.color = "white";
    todo.style.backgroundColor = "black";
    window.localStorage.setItem("--modoGuardado", "noche");

    // Se muestra el emoticono del sol
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";

    // Emoticono de la luna oculto
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}