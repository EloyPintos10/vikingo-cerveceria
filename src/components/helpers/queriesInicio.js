export function verMas() {
    let botonVerMas = document.getElementById("comprar");
    let sectionPadre = document.getElementsByClassName("tituloscard");
    if (botonVerMas.innerHTML === "Ver mas...") {
      
      botonVerMas.className = 'btn btn-outline-danger';
      botonVerMas.innerHTML = 'ocultar';
      //SEGUNDA FOMA PA CREAR UN PARRAFO.SE RECOMIENDA PARA TABLAS,CARD, SISTEMA DE GRILLA,ETC
      let parrafoNuevo = `<p class='lead'>prueba de boton</p>`;
      sectionPadre[2].innerHTML += parrafoNuevo; //el + cuando se usa con textos sirve para concatenar
      
    
    } else {
      console.log("aqui quiero borrar mi parrafo");
      // eliminar el parrafo creado del DOM
      console.log(sectionPadre[1].children[3]);
      sectionPadre[2].removeChild(sectionPadre[2].children[3]);
  
      //resetear los valores del bnt
      botonVerMas.innerHTML = "Ver mas...";
      botonVerMas.className = "btn btn-outline-primary";
    }
  }