import { useStore } from "@/store/store";
import { creaProductores, crearManagers } from "@/utils/creaObjetos";
import ls from "localStorage-slim";
ls.config.encrypt = false;

const almacenarDatosStore = (datos) => {
  const { productores, managers, recursos } = datos;
  const store = useStore();
  store.recursos = recursos;
  store.productores = [...productores];
  store.managers = [...managers];
};

//guarda datos en de la store en localStorage
export const guardarDatos = () => {
  const store = useStore();
  const datos = {
    recursos: store.recursos,
    productores: store.getProductores,
    managers: store.managers,
  };

  console.log("Los datos han sido guardados");
  //window.localStorage.setItem("datos", JSON.stringify(datos));
  ls.set("datos", JSON.stringify(datos));
};

//lee Datos guardados en la localStorage
export const leerDatos = () => {
  //const datos = JSON.parse(window.localStorage.getItem("datos"));
  try {
    const datos_localstorage = ls.get("datos");

    if (datos_localstorage) {
      //console.log("leyendo datos", datos_localstorage);
      return JSON.parse(datos_localstorage);
    }
    console.log("no habia datos");
    return;
  } catch (e) {
    //intentar leer datos, si estan corruptos borrarlos
    console.log("peto al leer los datos", e);
    ls.remove("datos");
    return;
  }
};

const datosIniciales = () => {
  const datos = {
    recursos: 100,
    productores: creaProductores(),
    managers: crearManagers(),
  };
  return datos;
};

export const reiniciarJuego = () => {
  almacenarDatosStore(datosIniciales());
  guardarDatos();
};

export const importData = () => {
  let datos = leerDatos();

  if (datos) {
    console.log("se han cargado datos");
  } else {
    datos = datosIniciales();
    console.log("empezando de 0", datos);
  }

  almacenarDatosStore(datos);
};


//retorna true si hay datos
export const haydatos = () => {
  let datos = leerDatos();
  if (datos)  return true;
 return false;
};
