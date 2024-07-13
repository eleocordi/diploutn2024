/*
console.log(document);
console.dir(document);
console.log(document.head);
console.dir(document.head);
console.log(document.body);
console.dir(document.body);

let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML);
console.log(titulo.innerText);

let nombre = "Eleonora";
titulo.innerHTML = "Hola" +" "+ nombre; 

let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);

let parrafosTag = document.getElementsByTagName("p");
console.log(parrafosTag);

const categorias = [];
let  entrada = prompt("Ingresar categoria (Escribir 'ESC' para salir)");
while (entrada.toUpperCase() != 'ESC'){
    categorias.push(entrada.toUpperCase());
    entrada = prompt("Ingresar categoria (Escribir 'ESC' para salir)");
}
console.log(categorias);

let selector = document.getElementById("select");

 for (const categoria of categorias){
    selector.innerHTML += '<option>' + categoria + '</option>';
 }

    let titulo1 = document.createElement("h2");

    titulo1.innerHTML = "Hola desde JS";
    document.body.appendChild(titulo1);


class Producto {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const productos = [];
productos.push(new Producto(1, "DONA", 300));
productos.push(new Producto(2, "TORTA", 100));
productos.push(new Producto(3, "MEDIALUNA", 250));
productos.push(new Producto(4, "VIGILANTE", 200));

for (const producto of productos) {
  let divProducto = document.createElement("div");
  divProducto.innerHTML = `<h4> Nombre : ${producto.nombre} </h4>
                        <p> Precio : ${producto.precio} </p>`;
  document.body.appendChild(divProducto);
}
 let contenedor = document.querySelector("contenedor")

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
  {  id: 2,  nombre: "Fideo", precio: 70 },
  {  id: 3,  nombre: "Pan"  , precio: 50},
  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
 contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
            <p>  Producto: ${producto.nombre}</p>
            <b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);
}*/



