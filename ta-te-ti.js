/* María del Pilar Vaquero Fernández
   Mayo de 2023
   Trabajo del Tercer Trimestre de la asignatura Lenguajes de Marcas */

'use strict';

// Función que sirve para que una casilla cambie a color gris claro al poner sobre ella el cursor del ratón:
function ponerRaton(id) {
    document.getElementById(id).style.backgroundColor = "rgb(244, 246, 246)";
}

// Función que sirve para que una casilla vuelva a su color original (transparente) al apartar de ella el cursor del ratón:
function quitarRaton(id) {
    document.getElementById(id).style.backgroundColor = "transparent";
}

let turno = 0; // Turno de la partida

const nyc = '🗽'; // Emoticono de la Estatua de la Libertad para Jugador 1
const japon = '🏯'; // Emoticono de un castillo japonés para Jugador 2

// Combinaciones ganadoras:
var paraGanar = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // En horizontal
                 [0, 3, 6], [1, 4, 7], [2, 5, 8], // En vertical
                 [0, 4, 8], [2, 4, 6] // En diagonal
                ];

const posicion_btn = document.querySelectorAll(".cuadrito"); // Posición del tablero

// Función que sirve para colocar un emoticono en una casilla al hacer click en ella:
function clicar(id) {
    turno++;
    const emoticono = turno % 2 ? nyc : japon; // Cuando el turno es impar, coloca el emoticono de la estatua. Cuando es par, el del castillo.
    let elemento = document.getElementById(id);
    elemento.innerHTML = emoticono;
    verificar();
}

// Función que sirve para recorrer el array de combinaciones ganadoras y verificar si esas posiciones del tablero contienen el mismo emoticono:
function verificar() {
    for (var i = 0; i < paraGanar.length; i++) {
        if (posicion_btn[paraGanar[i][0]].innerHTML == nyc && posicion_btn[paraGanar[i][1]].innerHTML == nyc && 
            posicion_btn[paraGanar[i][2]].innerHTML == nyc) {
            alert('Ganador: 🗽');
            reiniciar();
            return;
        } else if (posicion_btn[paraGanar[i][0]].innerHTML == japon && posicion_btn[paraGanar[i][1]].innerHTML == japon && 
                   posicion_btn[paraGanar[i][2]].innerHTML == japon) {
            alert('Ganador: 🏯');
            reiniciar();
            return;
        }
    }

    // Para verificar que ninguna casilla del juego está vacía. Si no gana ningún jugador, se produce un empate:
    if (posicion_btn[0].innerHTML != "" && posicion_btn[1].innerHTML != "" && posicion_btn[2].innerHTML != "" && 
        posicion_btn[3].innerHTML != "" && posicion_btn[4].innerHTML != "" && posicion_btn[5].innerHTML != "" && 
        posicion_btn[6].innerHTML != "" && posicion_btn[7].innerHTML != "" && posicion_btn[8].innerHTML != "") {
        alert('Empate.');
        reiniciar();
    }
}

// Función que sirve para que todas las casillas vuelvan a estar vacías:
function reiniciar() {
    turno = 0;
    posicion_btn.forEach(boton => {
        boton.innerHTML = '';
    });
}