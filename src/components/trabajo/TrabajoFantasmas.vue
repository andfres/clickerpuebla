<template>
  <div>
    <p>Siempre puedes trabjar tu mismo</p>
    <p>Limpia zapatos para ganarte un dinerillo</p>

    <div ref="divZapato" class="zapato">
      <img
        @mousemove="limpiarZapato"
        @touchmove="limpiarZapato"
        alt=""
        :src="imgZapatos[imagen]"
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup>
//    @mousemove="limpiarZapato"
// :src="`${base}img/zapatos/${imagen}.png`"
import  imagenesZapatos  from "@/assets/img/zapatos";
import { ref } from "vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import { animacionDinero, wait } from "../../utils/funciones";

// const base = import.meta.env.BASE_URL;

const store = useStore();
const { recolectar } = store;
const divZapato = ref(null);
const imgZapatos = imagenesZapatos()
const imagen = ref(0);
const { zapatero } = store;



const getMousePos = (evt) => {
  const pos = evt.currentTarget.getBoundingClientRect();
  console.log("x" ,evt.clientX, pos.left )
  console.log("y" ,evt.clientY, pos.top )

  const x = evt.clientX - pos.left;
  const y = evt.clientY - pos.top;
    console.log("x",x,"| y:", y );

     return {
     x: x,
     y: y
   };



};

// document.querySelector("#target").addEventListener('mousemove', (evt) => {
//   const mPos = getMousePos(evt);
//   evt.currentTarget.textContent = `Mouse position x:${mPos.x}  y:${mPos.y}`;
// });


const cambiarImagen = () => {
  imagen.value++;
 console.log("length",  imgZapatos.length)
  if (imagen.value >= imgZapatos.length ) {
    imagen.value = 0;
  }
};

const ganacias = zapatero.genera_por_clic;
console.log("genera" , ganacias);

// const ganacias = 1;
const gananciasTerminar = 20;
const maxCount1 = 5;
const maxCount2 = 200;

let count = 0;
let count2 = 0;

const limpiarZapato = (evt) => {
  count++;
  count2++;

  //  animacionDinero(divZapato.value, gananciasTerminar, true, getMousePos(evt));

  if (count >= maxCount1) {
    count = 0;
    recolectar(ganacias);
    animacionDinero(divZapato.value, ganacias, true, getMousePos(evt));
  }

  if (count2 >= maxCount2) {
    count2 = 2;
    cambiarImagen();
    recolectar(20);
    animacionDinero(divZapato.value, gananciasTerminar, true, getMousePos(evt));
  }
};
</script>



<style lang="scss">
.zapato {
  width: 100%;
  --background-color: rgb(50, 171, 205);
  display: flex;
  justify-content: center;

  img {
    padding: 1rem;
    width: 100%;
    min-width: 150px;
    background-color: rgb(50, 171, 205);
    cursor: url("@/assets/cepillo.png"), auto;
  }
}

// .prueba{
//     width: 500px;
//     height: 500px;
//     background-color: red;
//     background-image: url('@/assets/cepillo.png');
// }
</style>