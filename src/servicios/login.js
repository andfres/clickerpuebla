//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { useStoreOnline } from "@/store/storeOnline";
import { storeToRefs } from "pinia";
import router from "@/router";

const login = async (values) => {

  const store = useStore();
  const storeOnline = useStoreOnline();

  const { usuario } = storeToRefs(store);
  const { datosOnline } = storeToRefs(storeOnline);
  
  const data = {
    usernameOrEmail: values.email,
    password: values.password,
  };

  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      
    },
    body: JSON.stringify(data),
  };

  let dataResponse, ok, text;
  let fetchResponse;

  try {
    fetchResponse = await fetch(
      `${store.location}/auth/iniciarSesion`,
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
    throw new Error("Error - " + "Email o contraseña inválido");
  }

  dataResponse = await fetchResponse.json();

  console.log("dataResponse", dataResponse);

  usuario.value = {
    nombre: dataResponse.nombre,
    username: dataResponse.username,
    email: dataResponse.email,
    roles: dataResponse.roles,
    tokenDeAcceso: dataResponse.tokenDeAcceso,
  };

  datosOnline.value = {
    productores: dataResponse.edificios,
    managers: dataResponse.managers,
    mejoras: dataResponse.mejoras,
    logros: dataResponse.logros,
    recursos: dataResponse.dinero,
    recursosTotales: dataResponse.dineroTotal
  }
};

export default login;
