
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu"
import CrearProductos from './components/views/pagAdmin/CrearProductos';
import EditarProducto from './components/views/pagAdmin/EditarProducto';
import Registro from "./components/views/Registro"
import Error404 from "./components/views/Error404"
import DetalleProducto from "./components/views/DetalleProducto"
import RutasAdmin from './components/routes/RutasAdmin';
import RutasProtegidas from './components/routes/RutasProtegidas';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/views/Login';
import { useState } from 'react';

function App() {

  const usuario = JSON.parse(localStorage.getItem("tokenRagnar")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);


  return (
  
  <BrowserRouter>
  
  <Menu
    usuarioLogueado={usuarioLogueado}
    setUsuarioLogueado={setUsuarioLogueado}
  ></Menu>
  <Routes>
    <Route exact path="/" element={<Inicio></Inicio>}></Route>
    <Route
      exact
      path="/detalle-Producto/:id"
      element={<DetalleProducto></DetalleProducto>}
    ></Route>
    <Route
      exact
      path="/login"
      element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
    ></Route>
    {/* aqui quiero las rutas protegidas */}
    <Route
      path="/Administrar/*"
      element={
        <RutasProtegidas>
          <RutasAdmin setUsuarioLogueado={setUsuarioLogueado}></RutasAdmin>
        </RutasProtegidas>
      }
    ></Route>
    <Route path="*" element={<Error404></Error404>}></Route>
  </Routes>
  
</BrowserRouter>
);
}

export default App;




     
   
 


