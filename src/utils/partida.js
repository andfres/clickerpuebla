import { useStore } from "@/store/store";
// import { creaProductores, creaManagers, creaLogros } from "@/utils/creaObjetos";
import creaObjetos from "@/utils/creaObjetos";
import ls from "localStorage-slim";
ls.config.encrypt = false;


const { creaProductores, creaManagers, creaLogros } = creaObjetos;
const inicializarDatos = () => {
  const store = useStore();
  store.recursos = 1;
  store.productores = [...creaProductores()];
  store.managers = [...creaManagers()];
  store.logros = [...creaLogros()];
};



const actualizar_state_con_datos_almacenados__local_storage = (datos) => {
  const { recursos_guardados, productores_guardados, managers_guardados, logros_guardados } = datos;
  const store = useStore();
  store.recursos = recursos_guardados;

  try {
    //va a pisar solo los datos que se guardan
    store.productores = store.productores.map((ele, i) => {
      return { ...ele, ...productores_guardados[i] };
    });

    store.managers = store.managers.map((ele, i) => {
      return { ...ele, ...managers_guardados[i] };
    });

    store.logros = store.logros.map((ele, i) => {
      return { ...ele, ...logros_guardados[i] };
    });

  } catch (e) {
    console.log("peto", e);
    ls.remove("datos_guardados");
  }

};

//guarda datos en de la store en localStorage
export const guardarDatos = () => {
  const store = useStore();

  //para guardar en local o base de datos
  const datos_guardar = {
    recursos_guardados: store.recursos,
    productores_guardados: store.getDatosGuardarProductores,
    managers_guardados: store.getDatosGuardarManagers,
    logros_guardados: store.getDatosGuardarLogros,
  };

  console.log("datos_guardar", datos_guardar);
  console.log("Los datos han sido guardados");
  //window.localStorage.setItem("datos", JSON.stringify(datos));
  ls.set("datos_guardados", JSON.stringify(datos_guardar));
};

//lee Datos guardados en la localStorage
export const leerDatos = () => {
  try {
    const datos_localstorage = ls.get("datos_guardados");

    if (datos_localstorage) {
      console.log("leyendo datos", datos_localstorage);
      return JSON.parse(datos_localstorage);
    }
    console.log("no habia datos");
    return;
  } catch (e) {
    //intentar leer datos, si estan corruptos borrarlos
    console.log("peto al leer los datos", e);
    ls.remove("datos_guardados");
    return;
  }
};


export const importData = () => {
  inicializarDatos();
  if (leerDatos()) actualizar_state_con_datos_almacenados__local_storage(leerDatos());
};

export const reiniciarJuego = () => {
  inicializarDatos();
  guardarDatos();
};

