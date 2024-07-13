/*let contador = 0;
let intervalId = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
}, 3000);

setInterval(() => {
    console.log ("Hola despues de 3 segundos")
}, 3000);

let contador = 0;
let intervalId = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
}, 1000);

setInterval(() => {
    clearInterval(intervalId)
    console.log ("Temporizador detenido  despues de  5 segundos")
}, 5000);*/

function mostrarHora (){
    let reloj = document.getElementById("reloj");
    let ahora = new Date();
    reloj.innerHTML= ahora.toLocaleTimeString();
}

let cronometro =setInterval(mostrarHora, 1000);