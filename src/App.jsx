
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu"
import CrearProductos from './components/views/pagAdmin/CrearProductos';
import EditarProducto from './components/views/pagAdmin/EditarProducto';
import Registro from "./components/views/Registro"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/views/Login';
import { useState } from 'react';

function App() {

  const usuario = JSON.parse(localStorage.getItem("tokenRagnar")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);


  return (
   <BrowserRouter>
   <Menu  usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
   <Routes>
   
    
    <Route exact path="/Administrador" element={<Administrador></Administrador>}></Route>
    <Route exact path="/" element={<Inicio></Inicio>}></Route>
    <Route exact path="/registro" element={<Registro></Registro>}></Route>
    <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
<Route exact path="/CrearProducto" element={<CrearProductos></CrearProductos>}></Route>
<Route exact path="/EditarProducto/:id" element={<EditarProducto></EditarProducto>}></Route>
   </Routes>
   </BrowserRouter>



     
   
  );
}

export default App;
