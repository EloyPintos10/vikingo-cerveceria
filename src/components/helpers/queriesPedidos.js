const URL = process.env.REACT_APP_API_RAGNAR_PEDIDOS;

export const crearPedidoAPI = async (pedidoNuevo) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(pedidoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarPedidoAPI = async (_id) => {
  try {
    const respuesta = await fetch(URL + "/" + _id, {
      method: "DELETE",
      headers: {
        
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};


export const consultarPedidosAPI = async () => {
   
  try {
    const respuesta = await fetch(URL);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.error(error);
    return false;
  }
};


export const editarPedidoAPI = async (_id, pedido) => {
    
  try {
    const respuesta = await fetch(URL  + "/"+ _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};