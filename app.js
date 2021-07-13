let action= process.argv[2];
let accionesTareas = require("./tareas");
switch(action){
    //Listado   
    case 'listar':
    case 'Listar':
        let tareas = accionesTareas.leer();
        tareas.forEach((tarea, i) => {
            console.log("Tarea numero "+ (i+1)+": "+tarea.titulo+ "   Status: "+ tarea.estado);
        });
        break;
    //Caso indefinido
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
        break;
    //Crear tarea
    case 'crear':
    case 'Crear':
        title = process.argv[3];
        let tarea={};
        Object.defineProperty(tarea,'titulo',{value: title,writable:true, enumerable:true, configurable:true});
        Object.defineProperty(tarea,'estado',{value:'Pendiente', writable:true, enumerable:true, configurable:true});
        accionesTareas.guardarTarea(tarea);
        break;

    //Filtro
    case 'filtrar':
    case 'Filtrar':
        let estado = process.argv[3];
        let filtrado =accionesTareas.filtrarPorEstado(estado);
        filtrado.forEach(tarea => {
            console.log(tarea);
        });
    break;   
    //Opcion NO valida
    default:
        console.log("No entiendo qué quieres hacer.");    
}
