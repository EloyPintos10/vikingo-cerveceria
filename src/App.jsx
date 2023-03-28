import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import Registro from "./components/views/Registro"
import Error404 from "./components/views/Error404"

import RutasAdmin from './components/routes/RutasAdmin';
import RutasProtegidas from './components/routes/RutasProtegidas';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/views/Login';
import { useState } from 'react';
import Pedidos from './components/views/Pedidos';
import About from './components/views/About';





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
    <Route exact path="/" element={<Inicio  usuarioLogueado={usuarioLogueado}
    setUsuarioLogueado={setUsuarioLogueado}></Inicio>}></Route>
   
    <Route
      exact
      path="/login"
      element={<Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Login>}
    ></Route>
<Route
          exact
          path="/registro"
          element={
            <Registro setUsuarioLogueado={setUsuarioLogueado}></Registro>
          }
        ></Route>

<Route
          exact
          path="/pedidos/:_id"
          element={
            <Pedidos usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Pedidos>
          }
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
    <Route path="nosotros" element={<About></About>}></Route>
  </Routes>
  
<Footer></Footer>
</BrowserRouter>
);
}

export default App;




     
   
 


