const URL = process.env.REACT_APP_API_RAGNAR;

export const consultarAPI = async () => {
    // console.log(URL)
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
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + _id);
      const producto = {
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
    // console.log(URL)
    try {
      const respuesta = await fetch(URL  , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // envio el token en el header personalizado
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
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + _id, {
        method: "DELETE",
        headers: {
          // envio el token en el header personalizado
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
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + _id, {
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
  