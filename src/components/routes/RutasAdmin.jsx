import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProductos from "../views/pagAdmin/CrearProductos";
import EditarProducto from "../views/pagAdmin/EditarProducto";



const RutasAdmin = ({ setUsuarioLogueado }) => {
  return (
    <>
      <Routes>
        {/* /administrar/ */}
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<CrearProductos></CrearProductos>}
        ></Route>
        <Route
          exact
          path="/editar/:_id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        
      </Routes>
    </>
  );
};

export default RutasAdmin;