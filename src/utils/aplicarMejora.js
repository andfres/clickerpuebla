// import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";


const aplicarMejora = ({tipo, aplica, cantidad}) => {
  

  const store = useStore();
  // const { duplicarVelocidad } = storeToRefs(store);
   const  { duplicarVelocidad , mejorar_cepillo_clic, mejorar_espada}  = store;

  try {
    if (tipo === "velocidad") {
      console.log(`se esta aplicando ${tipo} a ${aplica}`);
      duplicarVelocidad(aplica, cantidad);
    }

    if (tipo === "mejorar_cepillo_clic"){
      console.log("mejorando cepillo")
      mejorar_cepillo_clic(1);
    }

    if (tipo === "mejorar_espada"){
      console.log("mejorando esapda")
      mejorar_espada(1);
    }

  } catch (e) {
    console.error(e);
  }
};


export default aplicarMejora;