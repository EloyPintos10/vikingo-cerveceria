const URL = process.env.REACT_APP_API_RAGNAR_PEDIDOS;


export const crearPedidoAPI = async (pedido) => {
    // console.log(URL)
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // envio el token en el header personalizado
          // "x-token": token,
        },
        body: JSON.stringify(pedido),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return false;
    }
  };