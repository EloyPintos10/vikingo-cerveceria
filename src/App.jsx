
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Administrador from './components/views/Administrador';
import CrearProductos from './components/views/pagAdmin/CrearProductos';
import EditarProducto from './components/views/pagAdmin/EditarProducto';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Administrador" element={<Administrador></Administrador>}></Route>
      <Route exact path="/CrearProducto" element={<CrearProductos></CrearProductos>}></Route>
      <Route exact path="/EditarProducto/:id" element={<EditarProducto></EditarProducto>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
