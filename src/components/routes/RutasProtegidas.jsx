import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
   const token = JSON.parse(localStorage.getItem('tokenRagnar')) || null
   if(!token){
    // si el usuario no esta logueado
    return <Navigate to={'/login'}></Navigate>
   }else{
    return children;
   }
};

export default RutasProtegidas;