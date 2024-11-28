// Selección de elementos del DOM
const entradaTexto = document.querySelector("input[type='text']"); // Campo de entrada de texto
const botonAgregar = document.querySelector(".btn-add"); // Botón para agregar tarea
const listaTareas = document.querySelector("ul"); // Contenedor de la lista de tareas
const mensajeVacio = document.querySelector(".empty"); // Mensaje de lista vacía

// Evento para agregar tareas
botonAgregar.addEventListener("click", (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  const texto = entradaTexto.value.trim(); // Capturar y limpiar el texto de la entrada

  if (texto === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  // Crear la tarea y agregarla a la lista
  crearTarea(texto);

  // Limpiar el campo de entrada
  entradaTexto.value = "";
  mensajeVacio.style.display = "none"; // Ocultar el mensaje de lista vacía
});

// Función para crear una nueva tarea
function crearTarea(texto) {
  // Crear elemento de lista para la tarea
  const tarea = document.createElement("li");

  // Crear párrafo para el texto de la tarea
  const parrafoTexto = document.createElement("p");
  parrafoTexto.textContent = texto;
  parrafoTexto.className = "texto-tarea";

  // Agregar elementos al elemento de la tarea
  tarea.appendChild(parrafoTexto);

  // Agregar la tarea a la lista
  listaTareas.appendChild(tarea);
}
