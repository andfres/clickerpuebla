<template>
  <p>Siempre puedes trabjar tu mismo</p>
  <p>Limpia zapatos para ganarte un dinerillo</p>
  <div ref="div" class="zapato">
    <img
      @mousemove="limpiarZapato"
      @touchmove="limpiarZapato"
      alt=""
      class=""
      :src="`${base}/img/zapatos/${imagen}.png`"
      draggable="false"
    />
  </div>

  <!-- <div class="prueba">ees</div> -->
</template>

<script setup>
//    @mousemove="limpiarZapato"

import { ref } from "vue";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";

const base = import.meta.env.BASE_URL

const store = useStore();
const { recolectar } = store;
const div = ref(null);

const imagen = ref(1);
const cambiarImagen= () => {

    imagen.value ++

    if (imagen.value > 3){
        imagen.value = 1
    }
}

const ganacias = 1;

let count = 0;
let count2 = 0;
const limpiarZapato = () => {
  count++;
  count2++;

  if (count >= 30) {
    count = 0;
    recolectar(ganacias);
    animacionDinero(div.value, ganacias, true);
  }

  if (count2 >= 300){
    count2 = 2;
    cambiarImagen()
    recolectar(20);
    animacionDinero(div.value, 20, true);
  } 
};
</script>



<style lang="scss">
.zapato {
  height: min-content;
  background-color: rgb(50, 171, 205);

  img {
    min-width: 150px;
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