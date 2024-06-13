//condicionales - estructuras de control
//if - 

/*let a = parseInt(prompt("Ingrese su numero"));
if(a>5){
    console.log("El número es mayor a 5")

}else if(a<5){
    console.log("El número es menor a 5")
}else{
    console.log("El número es igual a 5")
}
 

 let edad=16;
 let esMayorEdad;

 if(edad>18){
    esMayorEdad=true;
 }else{
    esMayorEdad=false;
 }
console.log(esMayorEdad)
//operador  condicional ternario tres operadores dentro de la misma sentencia,else resumido


let edad = 16;
let esMayorEdad = edad >= 18 ? true : false;
console.log(esMayorEdad)/*

let nombre = "Leo"
let edad = 32;
let esMayorEdad = edad >= 18 ? console.log(nombre +" es mayor de edad") : console.log(nombre +" no es mayor de edad");


// switch

let dia;
let day = new Date().getDay();

switch (day) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sábado";
        break;

}
console.log(dia);
console.log(day);
document.write(dia);


//Ejercicio
 
let a = parseInt(prompt("Ingrese su numero"));

if(a>1000){
    alert("El numero ingresado es mayor a mil");
};

document.write(a);

let stringSolicitado = prompt("Ingrese un saludo")

if(stringSolicitado==="Hola"){
    alert("HOLA!!");
};

let a = parseInt(prompt("Ingrese su numero"));

if(a >= 10 && a <= 50){
    alert("El numero ingresado esta entre 10 y 50");
};*/

let edad = prompt("Por favor, ingresa tu edad");

if (edad !== null) {
    edad = Number(edad);
    if (!isNaN(edad)) {
            if (edad >= 18) {
                document.write("Sos mayor de edad");
            } else {
                document.write("Sos menor de edad");
            } 
    } else {
            document.write("Ingresa un número válido");
    }
        }else {
        document.write("No ingresaste una edad");
    }


