let taskList = [];

// Función para agregar una tarea a la lista
function addTask(indicador, descripcion) {
  taskList.push({
    indicador: indicador,
    descripcion: descripcion,
    estado: "incompleta"
  });
}

// Función para marcar una tarea como completada
function completeTask(indicador) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].indicador === indicador) {
      taskList[i].estado = "completada";
      break;
    }
  }
}

// Función para mostrar la lista de tareas
function displayTasks() {
  console.log("Lista de tareas:");
  for (let i = 0; i < taskList.length; i++) {
    console.log(
      `${taskList[i].indicador} - ${taskList[i].descripcion} (${taskList[i].estado})`
    );
  }
}


//tareas de ejemplo

addTask('1', 'Completar informe')
addTask('2', 'Enviar correo electronico')
addTask('3', 'Limpiar la casa')

//Marcar como completado

completeTask("2")

// Mostarr lista de tareas

displayTasks();