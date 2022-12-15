
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Administrador from './components/views/Administrador';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Administrador" element={<Administrador></Administrador>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
