//funcion para cargar el dom completo antes de usar js
document.addEventListener("DOMContentLoaded", function () {
    const listaTareas = document.getElementById("lista-tareas");
    let arrayToDos = [];

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => {
            arrayToDos = toDos; // Asignar directamente la respuesta al array
            console.log(arrayToDos);
            mostrarToDosGral();
        })
        .catch((error) => console.error("Error fetching data", error));

    function mostrarToDosGral() {
        limpiarTabla();
        arrayToDos.forEach((toDo) => {
            let fila = document.createElement("tr");
            fila.innerHTML = htmlToDos(
                toDo.userId,
                toDo.id,
                toDo.title,
                toDo.completed
            );
            listaTareas.appendChild(fila);
        });
    }

    function mostrarCompletas() {
        limpiarTabla();
        arrayToDos
            .filter((toDo) => toDo.completed) // Filtrar solo las tareas completadas
            .forEach((toDo) => {
                let fila = document.createElement("tr");
                fila.innerHTML = htmlToDos(
                    toDo.userId,
                    toDo.id,
                    toDo.title,
                    toDo.completed
                );
                listaTareas.appendChild(fila);
            });
    }

    function mostrarPendientes() {
        limpiarTabla();
        arrayToDos
            .filter((toDo) => !toDo.completed) // Filtrar solo las tareas pendientes
            .forEach((toDo) => {
                let fila = document.createElement("tr");
                fila.innerHTML = htmlToDos(
                    toDo.userId,
                    toDo.id,
                    toDo.title,
                    toDo.completed
                );
                listaTareas.appendChild(fila);
            });
    }

    function mostrarPorUsuario() {
        const userId = parseInt(document.getElementById("userId").value);
        if (!isNaN(userId) && userId >= 1 && userId <= 10) {
            limpiarTabla();
            arrayToDos
                .filter((toDo) => toDo.userId === userId) // Filtrar por userId
                .forEach((toDo) => {
                    let fila = document.createElement("tr");
                    fila.innerHTML = htmlToDos(
                        toDo.userId,
                        toDo.id,
                        toDo.title,
                        toDo.completed
                    );
                    listaTareas.appendChild(fila);
                });
        } else {
            alert("Por favor, ingrese un ID de usuario válido entre 1 y 20.");
        }
    }

    function limpiarTabla() {
        while (listaTareas.firstChild) {
            listaTareas.removeChild(listaTareas.firstChild);
        }
    }

    function htmlToDos(userId, id, title, completed) {
        let html = `<td> ${userId}</td>
                    <td> ${id}</td>
                    <td> ${title}</td>
                    <td> ${completed ? "Completada" : "Pendiente"} </td>
                    <td> <button class="btn-editar" data-id="${id}">Editar Estado</button> </td>`;
        return html;
    }

    function editaEstado() {
        if (completed === false) {
            completed = true;
        }
    };

    document
        .getElementById("mostrar-todas")
        .addEventListener("click", mostrarToDosGral);
    document
        .getElementById("mostrar-completas")
        .addEventListener("click", mostrarCompletas);
    document
        .getElementById("mostrar-pendientes")
        .addEventListener("click", mostrarPendientes);
    document
        .getElementById("mostrar-por-usuario")
        .addEventListener("click", mostrarPorUsuario);

    const editarEstado = document.getElementById("btn-editar");
    editarEstado.addEventListener("click", editaEstado);
});


