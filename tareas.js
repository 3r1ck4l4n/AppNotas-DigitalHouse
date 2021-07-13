const lectura = require('fs');

let accionesTareas = {
    
        archivo: 'tareas.json',
        leer : function (){
        return JSON.parse(lectura.readFileSync (__dirname+'/tareas.json','utf8'));
        },

        escribirJSON : (arrayTareas)=>{
            let tarea = JSON.stringify(arrayTareas,null,' ');
            lectura.writeFileSync(__dirname+'/tareas.json',tarea,'utf8');
        
        },

        guardarTarea: (tarea)=> {
            tareas = accionesTareas.leer();
            tareas.push(tarea);
            accionesTareas.escribirJSON(tareas);
         },

        filtrarPorEstado: (estado)=>{
            tareas = accionesTareas.leer();
            let tareasFiltradas = tareas.filter( function(tarea){return tarea.estado==estado});
            return tareasFiltradas;
        }
         

}







module.exports= accionesTareas;