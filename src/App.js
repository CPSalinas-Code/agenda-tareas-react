import './App.css';
import logoimg from './img/logo.jpg';
//import Tarea from './componentes/Tarea'
//import Formulario from './componentes/Formulario';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacionTareas">
      <div className='logo-contenedor'>
        <img
          src={logoimg}
          className='logo-img' 
        />
      </div>
      <div className='contenedorLista'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>    
    </div>
  );
}

export default App;
