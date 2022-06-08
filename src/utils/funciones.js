
export const animacionDinero = (target, dinero, befenicio, posicionRaton) => {

    const clase = (befenicio) ? "beneficio" : "gasto";
    if (!befenicio) dinero = "-" + dinero;
  
    target.classList.add("gastoBeneficioContenedor");
    let div = document.createElement("div");
  
    div.classList.add(clase);
    
    const x =posicionRaton.x;
    const y =posicionRaton.y;

    div.style.top = `${y}px`;
    div.style.left = `${x}px`;

    // div.style.top = `0`;
    // div.style.left = `0`;


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