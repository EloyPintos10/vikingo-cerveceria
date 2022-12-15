
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/Administrador" element={<Administrador></Administrador>}></Route>
    <Route exact path="/inicio" element={<Inicio></Inicio>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
