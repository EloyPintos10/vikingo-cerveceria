const URL = process.env.REACT_APP_API_RAGNAR_USER;


export const consultarUserAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const listaUsuarios = await respuesta.json();
      return listaUsuarios;
      //agregar aqui la logica para buscar el usuario por mail y password
      // si lo encuentro retorno el objeto
      //caso contrario retorno null u objeto vacio
    } catch (e) {
      console.log(e);
    }
  };


  export const obtenerUsuarioAPI = async (id) => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + id);
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


export const crearUsuarioAPI = async (usuario, token) => {
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(usuario),

      });
      return respuesta;
    } catch (e) {
      console.log(e);
    }
  };


  export const login = async (usuario) => {
    try {
      console.log(usuario);
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
      return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        nombre: datos.nombre,
        token: datos.token,
        uid: datos.uid,
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  };


  export const borrarUsuarioAPI = async (id, token) => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + id, {
        method: "DELETE",
        headers: {
          //  envio el token en el header personalizado
          "x-token": token,
        },
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };


  export const editarUsuarioAPI = async (id, usuario) => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // "x-token": token,
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  