//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

import router from "@/router";

const login = async (values) => {
  const store = useStore();
  const { tokenDeAcceso, usuario } = storeToRefs(store);

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
      `http://${store.location}/auth/iniciarSesion`,
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

};

export default login;
