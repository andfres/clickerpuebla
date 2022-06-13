<template>
  <div class="conte_trabajo">
    <p>Siempre puedes trabjar tu mismo</p>
    <p>Limpia zapatos para ganarte un dinerillo</p>

    <div ref="divZapato" class="zapato trabajo">
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
import imagenesZapatos from "@/assets/img/zapatos";
import { ref } from "vue";
import { useStore } from "@/store/store";

import { storeToRefs } from "pinia";
import { animacionDinero, wait } from "../../utils/funciones";
import getMousePos from "@/utils/getMousePos.js";
// const base = import.meta.env.BASE_URL;

const store = useStore();
const { recolectar } = store;
const { zapatero } = storeToRefs(store);

const divZapato = ref(null);
const imgZapatos = imagenesZapatos();
const imagen = ref(0);


const { ultimo_trabajo } = storeToRefs(store);
ultimo_trabajo.value= "zapatero";





const cambiarImagen = () => {
  imagen.value++;
  console.log("length", imgZapatos.length);
  if (imagen.value >= imgZapatos.length) {
    imagen.value = 0;
  }
};


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
    recolectar(zapatero.value.genera_por_clic);
    animacionDinero(divZapato.value, zapatero.value.genera_por_clic, "beneficio", getMousePos(evt));
  }

  if (count2 >= maxCount2) {
    count2 = 2;
    cambiarImagen();
    recolectar(20);
    animacionDinero(divZapato.value, gananciasTerminar, "beneficio", getMousePos(evt));
  }
};
</script>



<style lang="scss">
.trabajo {
  margin: 2rem;
  
}
.zapato {
  img {
    padding: 1rem;
    width: 100%;
    min-width: 150px;
    background-color: rgb(50, 171, 205);
    cursor: url("@/assets/cepillo.png"), auto;
  }
}
</style>