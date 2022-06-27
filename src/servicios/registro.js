import { useStore } from "@/store/store";

import router from "@/router";

export const registro = async (values) => {
  const store = useStore();

  let data = {
    nombre: values.nombre,
    username: values.alias,
    email: values.email,
    password: values.password,
  };

  console.log("datos registro", data)

  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  let text, ok;

  try {
    const fetchResponse = await fetch(
      `${store.location}/auth/registrar`,
      settings
    );
    text = await fetchResponse.text();
    ok = fetchResponse.ok;


  } catch (e) {
    console.error(e);
    throw new Error("Error de conexión al llamar al API");
  }

  if (!ok) {
    throw new Error("Error de registro - " + text);
  }


};

export default registro;
