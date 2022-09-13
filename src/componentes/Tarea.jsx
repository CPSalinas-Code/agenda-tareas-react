import React from "react";
import '../hojas-de-estilos/Tarea.css'
import  { AiOutlineClear } from 'react-icons/ai'; 
//React icons son COMPOENETES de React, manejarlos <Componente />


function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada':'tarea-contenedor'}>
      <div className='tarea-texto' onClick={()=>completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-icono-contenedor' onClick={()=> eliminarTarea(id)}>
        <AiOutlineClear className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;