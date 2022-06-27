//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const servicioGuardarDatos = async (datos_guardar) => {
  const store = useStore();
  const { usuario } = storeToRefs(store);


  const data = {
    edificios: datos_guardar.productores_guardar,
    managers: datos_guardar.managers_guardar,
    mejoras: datos_guardar.mejoras_guardar,
    logros: datos_guardar.logros_guardar,
    dinero: store.recursos,
    dineroTotal: store.recursosTotales,
  };

  console.log("datos que se van a mandar", data);

  const settings = {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${usuario.value.tokenDeAcceso}`,
    },
    body: JSON.stringify(data),
  };

  console.log("token", `Bearer ${usuario.value.tokenDeAcceso}`);


  let ok, text;
  let fetchResponse;

  try {
    fetchResponse = await fetch(
      `${store.location}/game/guardarDatos`,
      settings
    );
    ok = fetchResponse.ok;

    if (!ok) {
      text = await fetchResponse.text();
      console.log(text);
      throw new Error("Error - " + text);
    }
  } catch (e) {
    console.error(e);
  }
};

export default servicioGuardarDatos;
