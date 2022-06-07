let location = "localhost:8080/api";
//location = "clickerpuebla-bff.herokuapp.com";

export const getAll = async () => {
  console.log("getall");
  // const settings = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin' : '*'

  //   }
  // };

  // try {
  //   const fetchResponse = await fetch(`http://${location}/usuaria`, settings);
  //   const data = await fetchResponse.json();

  //   console.log("fetchResponse" , data)
  //   return data;
  // } catch (e) {
  //   return e;
  // }
};

export const registro = async (values) => {
  let data = {
    nombre: values.nombre,
    username: values.alias,
    email: values.email,
    password: values.password,
  };

  let dat2a = {
    nombre: "bbb2",
    username: "bbb2",
    email: "bb2@gmail.com",
    password: "123",
  };



  console.log("data", data);
  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  let text, ok;

  try {
    const fetchResponse = await fetch(`http://${location}/auth/registrar`, settings);
    text = await fetchResponse.text();
    ok = fetchResponse.ok;
  } catch (e) {
    //console.log(e);
    throw new Error("Error de conexión al llamar al API"); // Lanzar el error
  }

  if(!ok) {
    throw new Error("Error de registro - " + text);
  }

};

export const login = async (values) => {
  const data = {
    usernameOrEmail: values.email,
    password: values.password,
  };

  // console.log(JSON.stringify(data));
  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
  try {
    const fetchResponse = await fetch(
      `http://${location}/auth/iniciarSesion`,
      settings
    );
    const dataResponse = await fetchResponse.json();
    console.log(dataResponse);
    sessionStorage.setItem("key", data.tokenDeAcceso);
    
    // console.log(data.tokenDeAcceso);

    const key = sessionStorage.getItem("key");
    console.log("key", key);

    // return data;
  } catch (e) {
    return e;
  }
};
