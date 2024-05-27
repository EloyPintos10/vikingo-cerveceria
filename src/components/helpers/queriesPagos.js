const URL = process.env.REACT_APP_API_RAGNAR_PAGOS;


export const pagarPedidoAPI = async (pagoNuevo) => {
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(pagoNuevo),
      });
      return respuesta;
    } catch (error) {
      console.error(error);
      return false;
    }
  };