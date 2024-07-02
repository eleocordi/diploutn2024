/** Clase 15: Bucles en JS */

/* 
let frutas = [
      "Manzana",
      "Pera",
      "Frutilla",
      "Pera",
      "Mora",
      "Limón",
      "Kiwi"
      ];


console.log(frutas[0].length);
      
frutas[1].length;
frutas[2].length;
frutas[3].length;
frutas[4].length;
frutas[5].length;
frutas[6].length;

While 

let valor = 0;

while (valor <= 15){
  console.log('El valor de i: ' + valor);
  valor + valor++;

}

Decremento

let numero = 100;
while (numero > 0){
  document.write('Te queda de saldo : ', numero, "<br>");
  numero = numero - 5;

}

let i = 6; 
do {
  console.log("Valor de i: ", i);
  i = i + 1; 
} while (i < 5);

//Practica while
let pasos = 100;
while (pasos > 0 ){
  if(pasos === 1){
    document.write('Solo falta ', pasos, " paso por caminar <br>");
  } else {
    document.write('Solo faltan ', pasos, " pasos por caminar <br>");
  }

  pasos = pasos -1 ;
}

// CICLO FOR
for(let i = 0; i <= 10; i++){
  alert(i)
}

for(let i = 1; i <= 5; i++){
//Solicitar en cada repetición  un nombre
let ingresarNombre = prompt("Ingrese un nombre");

//Informa el turno asignado

alert ("Turno nro " + i + " Nombre: " +ingresarNombre);

}


    // Propiedad LENGTH del array
    let frutas = [
      "Manzana",
      "Pera",
      "Frutilla",
      "Pera",
      "Mora",
      "Limón",
      "Kiwi",
      "Moras"
      ];
  


      for(let i = 0; i < frutas.length; i++){
        let fruta = frutas[i];
        console.log( fruta , ' tiene ', fruta.length, ' letras');
      }
*/
//ForEach

/*
      let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
     objetosMagicos.forEach(function(objetosMagicos, indice){
        console.log("Objeto con forEach es: ", objetosMagicos, indice);
      })

      objetosMagicos.forEach((objetosMagicos, indice) =>
        console.log("Objeto con forEach ,con función flecha, es: ", objetosMagicos, indice))


      Map - Generar un nuevo array basado en las transformaciones del array original 

      objetosMagicos.map((objetosMagicos) => {
        console.log("Objeto con map: " + objetosMagicos )
      });

      const numeros = [1, 2, 3,4, 5, 6, 10];
      const porDos = numeros.map((x) => x * 2 );
      const porCien = numeros.map((x) => x * 100 );

      console.log(numeros);      
      console.log("Por dos ", porDos);
      console.log("Por cien ", porCien);

     

      const numeros = [1, 2, 3, 4, 5, 6, 10];
      const encontrado = numeros.find(elemento => elemento > 4);
      console.log(encontrado);


      const nombres = ["Harry", "Hermione", "Ron"];
      const nombreEncontrado = nombres.find(elemento => elemento === "Harry");
      console.log("El nombre encontrado es: ", nombreEncontrado);
  


      const numeros = [1, 2, 3, 4, 5, 6, 10];
      const numMayoresCinco = numeros.filter((n) =>
      n >= 5 );
      console.log(numMayoresCinco);

    const palabras = ["manzanas", "banana", "uva", "frutillas", "naranja", "mora", "anana"]; 
    
    const palabraBuscada = "na";

    const palabrasClave = palabras.filter(
      (palabra) => palabra.includes(palabraBuscada)
    )

    console.log(palabrasClave);
*/

//El método 'includes' verifica si una subcadena o elemento estás presente en una cadena o en un array. En este caso, la usamos para corroborar que "na" está presente en las palabras dentro array.

//Ejercicio 1 1. Recorrer un array de números con el método .map() y crear un nuevo array que indique el número y si el número es par o impar.

/*
const num =[2,7,12,15,21,23,32,45,51];
document.write("El array de números es:  " + num + "<br>");
  
  
      const parImpar = num.map((n) => {
        return  n%2==0 ? n+" es un número Par <br>" : n+" es un número Impar <br>";
      });
    document.write(parImpar);*/

//Ejercicio 2 Creá un array de strings con nombres y luego guardá en una variable nombresCortos un nuevo array con los nombres que tengan 5 0  menos letras.
/*
let nombres = ["Leonardo", "Eleonora", "Verónica", "Héctor", "Jorge", "Pablo", "Gloria", "Selva","Laura","Amadeo","Rafael","Marcelo", "<br>"]
document.write(nombres);

let nombresCortos=[];
for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
   
    if (nombre.length <=5) {
     nombresCortos.push(nombre);    
    };
};
document.write(nombresCortos);

//otra forma
let nombres = ["Leonardo", "Eleonora", "Verónica", "Héctor", "Jorge", "Pablo", "Gloria", "Selva","Laura","Amadeo","Rafael","Marcelo", "<br>"]
let nombresCortos = nombres.filter(elemento => elemento.length >= 7);
document.write(nombresCortos);
*/

//Ejercicio 3 Creá una lista de supermercado vacía y permite al usuario agregar elementos al array utilizando prompt y push. Utilizá el método .forEach() para verificar si el elemento ya ha sido agregado. Si no, agregalo a la lista y arrojá un mensaje indicando que fue agregado. Si ya está en la lista, mostrá un mensaje indicando que el elemento ya fue agregado. Finalmente, se debe mostrar la lista completa con alert.

function agregarItem(nuevoItem) {
  listaSuper.push(nuevoItem);
}

function mostrarLista() {
  console.log(listaSuper);
}

function verificaItems(listaSuper, nuevoItem) {//MODIFICAR
  listaSuper.forEach((element) => {
    if (element === nuevoItem) {
      alert("El item ya incluido");
    } else {
      agregarItem(nuevoItem);
      alert("El item fue agregado a la lista")
    }
  });
}

function seguir() {
  seguirLista = prompt("Carga otro item? SI/NO");
  if (seguirLista == "SI") {
    return true;
  } else {
    return false;
  }
}

let listaSuper = [];
let nuevoItem;
let seguirLista;

do {
  nuevoItem = prompt("Añade un item a tu lista de Supermercado");
  verificaItems(listaSuper, nuevoItem);
} while (seguir());

mostrarLista();
