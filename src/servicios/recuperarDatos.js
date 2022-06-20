//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const login = async () => {
  const store = useStore();
  const { datosOnline, usuario } = storeToRefs(store);

  const settings = {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${usuario.value.tokenDeAcceso}`,
    },
  };

  console.log("token", `Bearer ${usuario.value.tokenDeAcceso}`);

  let dataResponse, ok, text;
  let fetchResponse;

  try {
    console.log(store.location);
    fetchResponse = await fetch(
      `http://${store.location}/game/recuperarDatos`,
      settings
    );

    ok = fetchResponse.ok;
  } catch (e) {
    console.error(e);
    throw new Error("Error de conexión al llamar al API");
  }

  if (!ok) {
    text = await fetchResponse.text();
    console.error(text);
  } else {
    dataResponse = await fetchResponse.json();
    console.log("dataResponse", dataResponse);

    datosOnline.value = {
      productores: dataResponse.edificios,
      managers: dataResponse.managers,
      mejoras: dataResponse.mejoras,
      logros: dataResponse.logros,
      recursos: dataResponse.dinero,
      recursosTotales: dataResponse.dineroTotal,
    };
  }
};

export default login;

// "edificios": [
//   {
//     "id": {
//       "userEmail": "c@gmail.com",
//       "elmentID": 1
//     },
//     "nivel": 300
//   },

// ],
// "managers": [
//   {
//     "id": {
//       "userEmail": "c@gmail.com",
//       "elmentID": 1
//     },
//     "contratado": false

// ],
// "mejoras": [
//   {
//     "id": {
//       "userEmail": "c@gmail.com",
//       "elmentID": 1
//     },
//     "adquirida": false,
//     "tipo": "velocidad",
//     "cantidad": 50,
//     "aplica": "Granero"
//   },

// "logros": [
//   {
//     "id": {
//       "userEmail": "c@gmail.com",
//       "elmentID": 1
//     },
//     "logrado": true,
//     "dia": "0/5/2022",
//     "hora": "16:45:39"
//   }
