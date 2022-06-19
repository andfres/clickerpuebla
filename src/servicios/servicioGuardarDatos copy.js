//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const servicioGuardarDatos = async (datos_guardar) => {
  console.log("datos que se van a mandar", datos_guardar);

  const store = useStore();
  const { usuario } = store;

  const data = {
    dinero: datos_guardar.recursos_guardados,
  };

  const settings = {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${usuario.tokenDeAcceso}`,
    },
    body: JSON.stringify(data),
  };

  // console.log("tokenDeAcceso", usuario.tokenDeAcceso)
  // console.log("settings", settings)

  let dataResponse, ok, text;
  let fetchResponse;

  try {
    fetchResponse = await fetch(
      `http://${store.location}/game/dinero`,
      settings
    );
    ok = fetchResponse.ok;

    if (!ok) {
      text = await fetchResponse.text();
      console.console(text);
      throw new Error("Error - " + text);
    }
  } catch (e) {
    console.error(e);
    // throw new Error("Error de conexión al llamar al API");
  }

  // dataResponse = await fetchResponse.json();
  // console.log("dataResponse", dataResponse);
};

export default servicioGuardarDatos;
