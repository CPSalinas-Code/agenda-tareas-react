import React from "react";
import '../hojas-de-estilos/Formulario.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario (props) {

  let idnum=0;

  const [input,setInput]= useState('');
  const manejarCambio = e =>{
    setInput(e.target.value);
    //console.log(e.target.value);

  };
  const manejarEnvio = e =>{
    e.preventDefault();
    //console.log('enviando form...');
    const tareaNueva = {
      id:uuidv4(),
      texto: input,
      completada: false,
    }
    //console.log(tareaNueva)
    props.onSubmit(tareaNueva);
  };

  return(
    <form className="contenedor-formulario" onSubmit={manejarEnvio}>
      <input 
      className='contenedor-texto'
      type='text'
      placeholder='Escribe una tarea'
      name='textoTarea'
      onChange={manejarCambio}
       />
      <button className='boton-tarea'>Agregar tarea</button>
    </form>
  );
}

export default Formulario;