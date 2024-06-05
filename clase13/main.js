/*Intro JS
//Hola Mundo desde archivo externo
console.log("Hola Mundo");
//Variables
var nombre="Harry";
console.log(nombre);
let nombreLet="Hermione" //string
console.log(nombreLet);
let edad=10;//variable numerica
const PI=3.14;//constante
let tenerMascotas=true; //boleano

console.log(edad,PI,tenerMascotas);

const miNombre="Eleonora Laura";
const miApellido="Cordiviola";
let miEdad=52;
let tenerMascota=false;
console.log(miNombre,miApellido,miEdad," años",tenerMascota);

//operaciones básicas
let numA=2;
let numB=5;
let resultadoSuma=numA+numB;
console.log(resultadoSuma);

const ESPACIO= " ";
let nombreCompleto = miApellido+ESPACIO+miNombre;
console.log(nombreCompleto);

//Prompt
let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada;
const ESPACIO= " ";
let dni = parseInt(prompt("Ingrese su numero de documento sin puntos"));
let datosCompletos =  "Su nombre es " + entrada + ESPACIO + ", su DNI es "+dni;
alert(datosCompletos);

//arrays unidimensionales indexados

let numeros=[1,2,3,5,8];
let colores=["rojo","verde","azul"];
console.log(numeros);
console.log(colores[0]);

//arrays multidimensional
let colorMascotas =[
    ["perro","marrón","gris","rojo"],
    ["gato","blanco","negro"],
    ["pez","amarillo"],
    ["jirafa","naranja"]
];

console.log(colorMascotas.length);
console.log(colorMascotas[1][2]);
console.log(colorMascotas[3][0].length)

//Objeto utilizado como un array asociativo
 let persona ={
    nombre:"Juan",
    edad:32,
    profesion:"Desarrollador"        
    };
 
    console.log(persona["nombre"]);
    console.log(persona.edad);

//array de objetos
    let empleados =[
        {nombre:"Juan",edad:32,profesion:"Desarrollador"},
        {nombre:"Cosme",edad:22,profesion:"Tester"},
        {nombre:"Juana",edad:32,profesion:"Desarrollador"}
    ];

    console.log(empleados.length);*/
let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let dni = parseInt(prompt("Ingrese su numero de documento sin puntos"));
const ESPACIO = " ";
let datosCompletos = "Su nombre es " + nombre + ESPACIO + apellido + ESPACIO + ", su DNI es " + dni;
alert(datosCompletos);
