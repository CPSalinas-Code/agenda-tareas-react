import React, { useState }from "react";
import Formulario from "./Formulario";
import '../hojas-de-estilos/ListaDeTareas.css'
import Tarea from "./Tarea";

function ListaDeTareas () {

  //tareas --> array de tareas para mostrar, aqui deberia haber interaccion con base de datos en casos mas complejos
  //setTareas --> funcion para anadir taras al array tareas
  const [tareas, setTareas] = useState([]);//array vacio como inicial

  
  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    
  };

  const cambiarTarea = id =>{
    
    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };


  const eliminarTareaFun = id => {
    //crea una copia sin el objeto el cual coincide con el id del objeto pasado, asi se elimina tarea.id !== id
    const tareasActualizadas = tareas.filter(tareaEliminada => tareaEliminada.id !== id);
    setTareas(tareasActualizadas);
  };


//Se renderizara una lista de componentes Tarea
  return(
    <>
      <Formulario onSubmit={agregarTarea}/>
      <div className="listatareas-contenedor">
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={cambiarTarea}
              eliminarTarea={eliminarTareaFun}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;