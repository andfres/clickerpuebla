<template>
  <div>
    <p>Siempre puedes trabjar tu mismo</p>
    <p>Limpia zapatos para ganarte un dinerillo</p>

    <div ref="divZapato" class="zapato">
      <img
        @mousemove="limpiarZapato"
        @touchmove="limpiarZapato"
        alt=""
        class=""
        :src="`${base}img/zapatos/${imagen}.png`"
        draggable="false"
      />
    </div>
  </div>
  <!-- <div class="prueba">ees</div> -->
</template>

<script setup>
//    @mousemove="limpiarZapato"

import { ref } from "vue";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";

const base = import.meta.env.BASE_URL;

const store = useStore();
const { recolectar } = store;
const divZapato = ref(null);

const imagen = ref(1);
const cambiarImagen = () => {
  imagen.value++;

  if (imagen.value > 3) {
    imagen.value = 1;
  }
};

const ganacias = 1;

let count = 0;
let count2 = 0;
const limpiarZapato = () => {
  count++;
  count2++;

  if (count >= 30) {
    count = 0;
    recolectar(ganacias);
    animacionDinero(divZapato.value, ganacias, true);
  }

  if (count2 >= 300) {
    count2 = 2;
    cambiarImagen();
    recolectar(20);
    animacionDinero(divZapato.value, 20, true);
  }
};
</script>



<style lang="scss">
.zapato {
  width: 100%;
  --background-color: rgb(50, 171, 205);
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    padding: 1rem;
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