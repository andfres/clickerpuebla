let location = "localhost:8080/api";


const servicioGuardarDatos = async (datos_guardar) => {

  console.log("datos que se van a mandar" , datos_guardar);

  

  // console.log("data", data);
  // const settings = {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json;charset=UTF-8",
  //   },
  //   body: JSON.stringify(data),
  // };

  // let text, ok;

  // try {
  //   const fetchResponse = await fetch(`http://${location}/guardar`, settings);
  //   text = await fetchResponse.text();
  //   ok = fetchResponse.ok;
  // } catch (e) {
  //   //console.log(e);
  //   throw new Error("Error de conexión al llamar al API"); // Lanzar el error
  // }

  // if(!ok) {
  //   throw new Error("Error de registro - " + text);
  // }

  

};

export default servicioGuardarDatos;