// const settings = {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     },
//   };

let location = "localhost:8080/api";
//location = "clickerpuebla-bff.herokuapp.com";

export const getAll = async () => {
  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
     
    }
  };

  try {
    const fetchResponse = await fetch(`http://${location}/usuaria`, settings);
    const data = await fetchResponse.json();


    console.log("fetchResponse" , data)
    return data;
  } catch (e) {
    return e;
  }
};

export const registrarse = async () => {
  const settings = {
    method: "POST",
    body: {
      nombre: "fresno",
      email: "fresno@correo.es"
    },
  };
  try {
    const fetchResponse = await fetch(`http://${location}/usuario`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
