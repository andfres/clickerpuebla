import { useStore } from "@/store/store";
import { useStoreOnline } from "@/store/storeOnline";
import { storeToRefs } from "pinia";

import aplicarMejora from "@/utils/aplicarMejora.js";
import ls from "localStorage-slim";
import servicioGuardarDatos from "@/servicios/servicioGuardarDatos.js";

ls.config.encrypt = false;





export const inicializarDatos = () => {
  const store = useStore();
  const usuarioTemporal = store.usuario;
  store.$reset();
  store.usuario = usuarioTemporal;
};

const actualizar_state_con_datos_almacenados__local_storage = (datos) => {
  const {
    recursos_guardar,
    recursos_guardar_totales,
    productores_guardar,
    managers_guardar,
    logros_guardar,
    mejoras_guardar,
  
  } = datos;


  const store = useStore();

  store.recursos = recursos_guardar;
  store.recursosTotales = recursos_guardar_totales;

  try {
    //va a pisar solo los datos que se guardan
    store.productores = store.productores.map((ele, i) => {
      return { ...ele, ...productores_guardar[i] };
    });

    store.managers = store.managers.map((ele, i) => {
      return { ...ele, ...managers_guardar[i] };
    });

    store.logros = store.logros.map((ele, i) => {
      return { ...ele, ...logros_guardar[i] };
    });

    //se aplican las mejoras
    mejoras_guardar.map((ele, i) => {
      // console.log("mejora", ele);
      if (ele.adquirida) aplicarMejora(ele.parametros);
    });

    //se guardan las mejoras
    store.mejoras = store.mejoras.map((ele, i) => {
      return { ...ele, ...mejoras_guardar[i] };
    });
  } catch (e) {
    console.error(e);
    ls.remove("datos_guardar");
  }
};

//guarda datos en de la store en localStorage
export const guardarDatos = () => {

  ls.set("datos_guardar", JSON.stringify(datos_guardar()));
  console.log("Los datos han sido guardados");
};

// obtiene de la store los datos que se van a guardar
const datos_guardar = () => {
  const store = useStore();
  const {recursos, recursosTotales} = storeToRefs(store);

  //para guardar en local o base de datos
  const datos_guardar = {
    recursos_guardar: store.getRecursos,
    recursos_guardar_totales: store.getRecursosTotales,
    productores_guardar: store.getDatosGuardarProductores,
    managers_guardar: store.getDatosGuardarManagers,
    logros_guardar: store.getDatosGuardarLogros,
    mejoras_guardar: store.getDatosGuardarMejoras,
  };
  console.log("datos_guardar", datos_guardar);

  return datos_guardar;
};

//lee Datos guardados en la localStorage
export const leerDatos = () => {
  try {
    const datos_localstorage = ls.get("datos_guardar");

    if (datos_localstorage) {
      console.groupCollapsed("leyendo datos");
      console.log(datos_localstorage);
      console.groupEnd("");

      console.log(Date.now());

      return JSON.parse(datos_localstorage);
    }
    console.log("no habia datos");
    // reiniciarJuego();

    return false;
  } catch (e) {
    //intentar leer datos, si estan corruptos borrarlos
    console.log("error al leer los datos", e);
    ls.remove("datos_guardar");
    // reiniciarJuego();

    return false;
  }
};

export const importData = () => {
  actualizar_state_con_datos_almacenados__local_storage(leerDatos());
};

export const reiniciarJuego = () => {
  ls.remove("datos_guardar");
  inicializarDatos();
  guardarDatos();
};

export const guardarDatosServidor = () => {
  servicioGuardarDatos(datos_guardar());
};

export const usarDatosOnline = () => {
  try {

    const store = useStore();
    const storeOnline = useStoreOnline();

    const { datosOnline } = storeOnline;

    console.log("datosOnline -----------------", datosOnline);

    const datosBien = {
      productores: datosOnline.productores.map((ele) => {
        return {
          id: ele.id.elmentID,
          nivel: ele.nivel,
        };
      }),
      managers: datosOnline.managers.map((ele) => {
        return {
          id: ele.id.elmentID,
          contratado: ele.contratado,
        };
      }),
      mejoras: datosOnline.mejoras.map((ele) => {
        return {
          id: ele.id.elmentID,
          adquirida: ele.adquirida,
          parametros: {
            tipo: ele.tipo,
            cantidad: ele.cantidad,
            aplica: ele.aplica,
          },
        };
      }),
      logros: datosOnline.logros.map((ele) => {
        return {
          id: ele.id.elmentID,
          logrado: ele.logrado,
          fecha: {
            hora: ele.hora,
            dia: ele.dia,
          },
        };
      }),
      recursos: datosOnline.recursos,
      recursosTotales: datosOnline.recursosTotales,
    };


    console.log("DATOS BIEN", datosBien)

    const {
      recursos,
      productores,
      managers,
      logros,
      mejoras,
      recursosTotales,
    } = datosBien;


    store.recursos = recursos;
    store.recursosTotales = recursosTotales;

    store.productores = store.productores.map((ele, i) => {
      return { ...ele, ...productores[i] };
    });

    store.managers = store.managers.map((ele, i) => {
      return { ...ele, ...datosOnline.managers[i] };
    });

    store.logros = store.logros.map((ele, i) => {
      return { ...ele, ...datosOnline.logros[i] };
    });

    //se aplican las mejoras
    datosOnline.mejoras.map((ele, i) => {
      if (ele.adquirida) aplicarMejora(ele.parametros);
    });

    //se guardan las mejoras
    store.mejoras = store.mejoras.map((ele, i) => {
      return { ...ele, ...datosOnline.mejoras[i] };
    });
  } catch (e) {
    console.error(e);
  }
};
