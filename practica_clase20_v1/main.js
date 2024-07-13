//funcion para cargar el dom completo antes de usar jsdocument.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        const listaTareas = document.getElementById("lista-tareas");
        let arrayToDos = [];
        let editIndex = -1;
    
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((toDos) => {
                arrayToDos = toDos; // Asignar directamente la respuesta al array
                console.log(arrayToDos);
                mostrarToDosGral();
            })
            .catch((error) => console.error("Error fetching data", error));
    
        function mostrarToDosGral() {
            limpiarTabla(); // Limpiar la tabla antes de mostrar los datos
            arrayToDos.forEach((toDo, index) => {
                let fila = document.createElement("tr");
                fila.innerHTML = htmlToDos(toDo.userId, toDo.id, toDo.title, toDo.completed, index);
                listaTareas.appendChild(fila);
            });
        }
    
        function mostrarCompletas() {
            limpiarTabla(); // Limpiar la tabla antes de mostrar los datos
            arrayToDos
                .filter((toDo) => toDo.completed) // Filtrar solo las tareas completadas
                .forEach((toDo, index) => {
                    let fila = document.createElement("tr");
                    fila.innerHTML = htmlToDos(toDo.userId, toDo.id, toDo.title, toDo.completed, index);
                    listaTareas.appendChild(fila);
                });
        }
    
        function mostrarPendientes() {
            limpiarTabla(); // Limpiar la tabla antes de mostrar los datos
            arrayToDos
                .filter((toDo) => !toDo.completed) // Filtrar solo las tareas pendientes
                .forEach((toDo, index) => {
                    let fila = document.createElement("tr");
                    fila.innerHTML = htmlToDos(toDo.userId, toDo.id, toDo.title, toDo.completed, index);
                    listaTareas.appendChild(fila);
                });
        }
    
        function mostrarPorUsuario() {
            const userId = parseInt(document.getElementById("userId").value);
            if (!isNaN(userId) && userId >= 1 && userId <= 20) {
                limpiarTabla(); // Limpiar la tabla antes de mostrar los datos
                arrayToDos
                    .filter((toDo) => toDo.userId === userId) // Filtrar por userId
                    .forEach((toDo, index) => {
                        let fila = document.createElement("tr");
                        fila.innerHTML = htmlToDos(toDo.userId, toDo.id, toDo.title, toDo.completed, index);
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
    
        function htmlToDos(userId, id, title, completed, index) {
            let html = `<td>${userId}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${completed ? "Completada" : "Pendiente"}</td>
                        <td><button onclick="editarTarea(${index})">Editar</button></td>`;
            return html;
        }
    
        window.editarTarea = function (index) {
            editIndex = index;
            const toDo = arrayToDos[index];
            document.getElementById("editUserId").value = toDo.userId;
            document.getElementById("editTitle").value = toDo.title;
            document.getElementById("editCompleted").checked = toDo.completed;
            document.getElementById("editModal").style.display = "block";
        };
    
        document.getElementById("saveChanges").addEventListener("click", function () {
            if (editIndex > -1) {
                arrayToDos[editIndex].userId = parseInt(document.getElementById("editUserId").value);
                arrayToDos[editIndex].title = document.getElementById("editTitle").value;
                arrayToDos[editIndex].completed = document.getElementById("editCompleted").checked;
                document.getElementById("editModal").style.display = "none";
                mostrarToDosGral();
            }
        });
    
        document.querySelector(".close").addEventListener("click", function () {
            document.getElementById("editModal").style.display = "none";
        });
    
        window.onclick = function (event) {
            if (event.target == document.getElementById("editModal")) {
                document.getElementById("editModal").style.display = "none";
            }
        };
    
        document.getElementById("mostrar-todas").addEventListener("click", mostrarToDosGral);
        document.getElementById("mostrar-completas").addEventListener("click", mostrarCompletas);
        document.getElementById("mostrar-pendientes").addEventListener("click", mostrarPendientes);
        document.getElementById("mostrar-por-usuario").addEventListener("click", mostrarPorUsuario);
    });
    