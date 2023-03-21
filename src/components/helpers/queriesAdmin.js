

const URL = process.env.REACT_APP_API_RAGNAR;

export const consultarAPI = async () => {
   
    try {
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();
      return listaProductos;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  export const obtenerProductoAPI = async (_id) => {     
     
    try {
      const respuesta = await fetch(URL +  "/" +  _id);
      const producto =  
        {
          dato: await respuesta.json(),
         status: respuesta.status,
       };
   
      return producto;
      
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  
  export const crearProductoAPI = async (producto, token) => {
   
    try {
      const respuesta = await fetch(URL  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
           "x-token": token,
        },
        
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  export const borrarProductoAPI = async (_id, token) => {
   
    try {
      const respuesta = await fetch(URL + "/" + _id, {
        method: "DELETE",
        headers: {
          
           "x-token": token,
        },
        
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  
  export const editarProductoAPI = async (_id, producto, token) => {
    
    try {
      const respuesta = await fetch(URL  + "/"+ _id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
           "x-token": token,
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  