//location = "clickerpuebla-bff.herokuapp.com";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const getClasi = async () => {
  const store = useStore();
  const { clasificacion } = storeToRefs(store);

  console.log(store.location);



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