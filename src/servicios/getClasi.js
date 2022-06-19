//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const getClasi = async () => {
  const store = useStore();
  const { clasificacion } = storeToRefs(store);

  console.log(store.location);


  // const settings = {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json;charset=UTF-8",
  //   },
  //   body: JSON.stringify(data),
  // };

  // let text, ok;

  // try {
  //   const fetchResponse = await fetch(`http://${location}/auth/registrar`, settings);
  //   text = await fetchResponse.text();
  //   ok = fetchResponse.ok;
  // } catch (e) {
  //   //console.log(e);
  //   throw new Error("Error de conexión al llamar al API"); // Lanzar el error
  // }

  // if(!ok) {
  //   throw new Error("Error de registro - " + text);
  // }

  clasificacion.value = [
    {
      nickName: "pepa",
      dinero: 100,
    },
    {
      nickName: "manolo",
      dinero: 200,
    },
    {
      nickName: "naruto",
      dinero: 400,
    },
  ]



};


export default getClasi;