
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu"
import CrearProductos from './components/views/pagAdmin/CrearProductos';
import EditarProducto from './components/views/pagAdmin/EditarProducto';
import Registro from "./components/views/Registro"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
   <BrowserRouter>
   <Menu></Menu>
   <Routes>
   
    
    <Route exact path="/Administrador" element={<Administrador></Administrador>}></Route>
    <Route exact path="/inicio" element={<Inicio></Inicio>}></Route>
    <Route exact path="/registro" element={<Registro></Registro>}></Route>
<Route exact path="/CrearProducto" element={<CrearProductos></CrearProductos>}></Route>
<Route exact path="/EditarProducto/:id" element={<EditarProducto></EditarProducto>}></Route>
   </Routes>
   </BrowserRouter>



     
   
  );
}

export default App;
