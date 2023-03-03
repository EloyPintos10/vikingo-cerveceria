const URL = process.env.REACT_APP_API_RAGNAR_USER;


export const consultarUserAPI = async () => {
    try {
      const respuesta = await fetch(URL + "/nuevo");
      const listaUsuarios = await respuesta.json();
      return listaUsuarios;     
    } catch (e) {
      console.log(e);
    }
  };


  export const obtenerUsuarioAPI = async (_id) => {
   
    try {
      const respuesta = await fetch(URL + "/" + _id);
      const usuario = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
      return usuario;
    } catch (error) {
      console.log(error);
      return false;
    }
  };


export const crearUsuarioAPI = async (usuario, token) => {
    try {
      const respuesta = await fetch(URL + "/nuevo", {
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
      
      const respuesta = await fetch(URL + "/", {
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
        perfil:datos.perfil,
        token: datos.token,
        uid: datos.uid,
      };
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  };


  export const borrarUsuarioAPI = async (_id, token) => {
    
    try {
      const respuesta = await fetch(URL + "/nuevo" + "/"+  _id, {
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


  export const editarUsuarioAPI = async (_id, token, usuario) => {
  
    try {
      const respuesta = await fetch(URL + "/" + _id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
           "x-token": token,
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  