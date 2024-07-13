class Mascota {
  constructor(nombre) {
    this.nombre = nombre;
    this.adoptada = false;
  }
  adoptar() {
    this.adoptada = true;
  }
}

function agregarMascota() {
  const inputMascota = document.getElementById("nuevaMascota");
  const nombreMascota = inputMascota.value.trim();

  if (nombreMascota != "") {
    const nuevaMascota = new Mascota(nombreMascota);
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nuevaMascota.nombre;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      elementoLista.remove();
    });

    if (nuevaMascota.adoptada) {
      elementoLista.classList.add("adoptada");
    }

    elementoLista.addEventListener("click", function () {
      nuevaMascota.adoptar();
      elementoLista.classList.add("adoptada");
    });

    botonEliminar.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    elementoLista.appendChild(botonEliminar);
    const listaMascota = document.getElementById("listaMascotas");
    listaMascota.appendChild(elementoLista);
    inputMascota.value = ""; //limpia despues de agregar
  }
}

const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota);

document
  .getElementById("nuevaMascota")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      agregarMascota();
    }
  });
