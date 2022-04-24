
export const animacionDinero = (target, dinero, befenicio) => {

    const clase = (befenicio) ? "beneficio" : "gasto";
    if (!befenicio) dinero = "-" + dinero;
  
    target.classList.add("gastoBeneficioContenedor");
    let div = document.createElement("div");
  
    div.classList.add(clase);
    div.append(dinero);
    target.append(div);
  
     const destruir = async (elemento, contenedor) => {
       await wait(1000);
       contenedor.removeChild(elemento);
     };
  
     destruir(div, target);
  };


export const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));