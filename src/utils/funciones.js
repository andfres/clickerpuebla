
export const animacionDinero = (target, dinero, clase, posicionRaton) => {

    // "beneficio" ,  "gasto" , "damage";

    if (clase === "gasto") dinero = "-" + dinero;
  
    target.classList.add("gastoBeneficioContenedor");
    let div = document.createElement("div");
  
    div.classList.add(clase, "noRaton");
    

    if (posicionRaton){
      const x =posicionRaton.x;
      const y =posicionRaton.y;

      div.style.top = `${y}px`;
      div.style.left = `${x}px`;
    }else{
      div.classList.add("centrar");
    }

    div.append(dinero);
    target.append(div);
  
     const destruir = async (elemento, contenedor) => {

      try{
        await wait(1000);
        contenedor.removeChild(elemento);
      }catch(e){}

     };
  
     destruir(div, target);
  };


export const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));