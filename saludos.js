/* María del Pilar Vaquero Fernández
   Mayo de 2023
   Trabajo del Tercer Trimestre de la asignatura Lenguajes de Marcas */

'use strict';

// Variable que usamos para pintar los saludos:
var colorfuente = "white"

// Array con colores, tipo constante, para definir los colores de los cuadritos: 
const colores = [];
colores[0] = "rgb(250, 78, 78)";
colores[1] = "rgb(68, 160, 252)";
colores[2] = "rgb(236, 236, 198)";
colores[3] = "rgb(32, 206, 32)";
colores[4] = "rgb(254, 254, 40)";

// Función que sirve para mostrar un mensaje en un elemento:
function saludar(identificador) {
    let elem = document.getElementById(identificador);
    elem.style.color = colorfuente;
    elem.innerHTML = "Hello there!"
    colorfuente = getComputedStyle(elem).backgroundColor;
}

// Función que sirve para elegir elementos a pintar y colores:
function pintar() {
    for (let x = 1; x <= colores.length; x++) {
        let ident = "c" + x;
        let cf = colores[x - 1];
        rellenar(ident, cf);
    }
}

// Función que sirve para pintar un cuadrito:
function rellenar(identificador, colorfondo) {
    let elem = document.getElementById(identificador);
    elem.style.backgroundColor = colorfondo;
}

pintar();