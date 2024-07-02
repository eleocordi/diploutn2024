//funciones
/*
function saludar(nombre) {
    console.log("Hola ", nombre);
}

saludar("Laura");

function saludarCompleto(nombre, apellido, edad) {
    console.log("Hola ", nombre, apellido, "tu edad es ", edad);
}

saludarCompleto("Laura", "Lopez", 5);


function sumar(num1,num2){
    return num1+num2;
}

sumar(5,6);// llamo a variable, paso argumentos
console.log(sumar);// imprime formato de funcion


let resultado = sumar(9,12); //guardo retorno de funcion en una variable

console.log(resultado);


//funcion anonima

let suma = function(num1,num2){
    return num1+num2;
}

let resultado = suma(12,10);
console.log(resultado);

//Ejercicio
function saludarCompleto(nombre, apellido, serie) {
    return ("Hola ", nombre, apellido, "tu serie favorita es ", serie);
}

console.log(saludarCompleto("Laura", "Lopez", "Monk"));


//Ejercicio TODO SIMPLIFICAR

let nombre;

function obtenerNombre(){
    nombre = prompt("Por favor ingresa tu nombre");
    return nombre;
}

function contarLetras(sustantivo){
    return(sustantivo.length);
} 

let cantidadLetras = contarLetras(obtenerNombre());
console.log ("tu nombre tiene",cantidadLetras , "letras");


//FUNCIONES ANÓNIMAS gralmente se asignan a variables declaradas como constantes

const suma = function (a,b) {return a+b};
const resta = function (a,b) {return a-b};
 
//se pueden llamar usando el identificador de la variable declarada

console.log(suma (15,20));
 console.log(resta (15,5));

 const sumar =  (a,b) => {return a+b};
const restar =  (a,b) => {return a-b};
console.log(sumar (15,20));
 console.log(restar (15,5));
 
 //
 function largoNombre(nombre){
 return nombre.length
 }

 console.log(largoNombre("Federico"));

 //otra forma

 function nombreLength(){
 let nombre =prompt("Ingrese su nombre: ");
 return nombre.length;
 }

 let largoNombre= nombreLength();
 console.log(largoNombre);

//otra forma

let resultado;
let nombre="Agustin";

function getNombre(nombre){
return nombre.length;
}

resultado= getNombre(nombre);

document.write(nombre + " la longitud de tu nombre es " + resultado);

// CALCULAR PRECIO

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;

const iva = x=> x * 0.21;
let precioProducto =500;
let precioDescuento=50;

let nuevoPrecio= resta(suma(precioProducto,iva(precioProducto)),precioDescuento);
console.log(nuevoPrecio);


 //aplicaciones interactivas

//Costo Producto

let componenteA = 30;
let componenteB = 56;
let componenteC = 203;
let componenteD = 102;
let costo = 0;
const sumar = (a, b) => { return a + b };

let producto = prompt("Eliga el Producto: AB,AC,AD")

switch (producto) {
    case "AB":
        costo = sumar(componenteA, componenteB);
        break;
    case "AC":
        costo = sumar(componenteA, componenteC);
        break; 
    case "AD":
        costo = sumar(componenteA, componenteD);
        break;
    default:
        alert("Producto inexistente")
}

alert("El costo del producto es: " + costo);


console.log(document.head);
console.log(document.body);
console.dir(document.head);//imprime propiedades disponibles
console.dir(document.body);
*/

//Seleccion de elementos de DOM querySelector

let titulo = document.querySelector("#titulo");
console.log(titulo);

let parrafos = document.querySelectorAll(".parrafo");
console.log(parrafos);

let cambiarTextoBtn = document.querySelector("#cambiarTexto");
let cambiarColorBtn = document.querySelector("#cambiarColor");
let cambiarClaseBtn = document.querySelector("#cambiarClase");

//funcion para cambiar texto del titulo

function cambiarTexto() {
  titulo.textContent = "Texto Nuevo";
}

function cambiarColor() {
  parrafos.forEach((parrafo) => {
    parrafo.classList.toggle("cambiarColor");
  });
}

function cambiarClase(){
    parrafos.forEach((parrafo) => {
        parrafo.classList.toggle("nuevaClase");
      });
}

cambiarTextoBtn.addEventListener("click", cambiarTexto); //asignar la funcion al evento
cambiarColorBtn.addEventListener("click", cambiarColor);
cambiarClaseBtn.addEventListener("click", cambiarClase);