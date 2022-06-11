<template>
  <div class="conte_trabajo">
    <p>Mata fantasmas para ganar dinero</p>

    <div ref="divZapato" class="fantasma trabajo">
      <div class="barraVida">
        <div
          class="barraInterna"
          :style="{ width: porcentaje * 100 + '%' }"
        ></div>
        <div class="barraDatos">{{ vidaEnemigo }} / {{ VIDA_MAX_ENEMIGO }}</div>
      </div>

      <img
        @click="atacarFantasma"
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
import imagenesFantasmas from "@/assets/img/fantasmas2";
import { ref, computed } from "vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import { animacionDinero } from "../../utils/funciones";
import getMousePos from "@/utils/getMousePos.js";

// const base = import.meta.env.BASE_URL;

const store = useStore();
const { recolectar, fantasmas } = store;

const divZapato = ref(null);
const imagen = ref(0);
const imgZapatos = imagenesFantasmas();


const { ultimo_trabajo } = storeToRefs(store);
ultimo_trabajo.value= "fantasmas";

const VIDA_MAX_ENEMIGO = fantasmas.vida_maxima;
const vidaEnemigo = ref(VIDA_MAX_ENEMIGO);

const porcentaje = computed(() => {
  return vidaEnemigo.value / VIDA_MAX_ENEMIGO;
});

const cambiarImagen = () => {
  imagen.value++;
  console.log("length", imgZapatos.length);
  if (imagen.value >= imgZapatos.length) {
    imagen.value = 0;
  }
};

const atacarFantasma = (evt) => {
  const porcentaje_critico = 20;
  const daño_critico = 2;

  const dado = Math.floor(Math.random() * 100) + 1;
  console.log(dado);

  let daño_final;

  if (dado < porcentaje_critico) {
    daño_final = fantasmas.damage_sword * daño_critico;
    animacionDinero(divZapato.value, "!CRÍTICO!", "damage", getMousePos(evt));
  } else {
    daño_final = fantasmas.damage_sword;
    animacionDinero(divZapato.value, daño_final, "damage", getMousePos(evt));
  }

  vidaEnemigo.value -= daño_final;

  if (vidaEnemigo.value <= 0) {
    vidaEnemigo.value = VIDA_MAX_ENEMIGO;
    cambiarImagen();

    recolectar(fantasmas.genera_al_matar);
    animacionDinero(
      divZapato.value,
      fantasmas.genera_al_matar,
      "beneficio",
      getMousePos(evt)
    );
  }
};
</script>



<style scoped lang="scss">
.fantasma {
  // width: 100%;
  position: relative;

  .barraVida {
    border: 1px solid red;
    width: 40%;
    height: 12px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    .barraDatos {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .barraInterna {
      background-color: red;
      height: 100%;
      width: 20%;
    }
  }

  img {
    padding: 1rem;
    width: 100%;
    min-width: 150px;
    background-color: rgb(50, 171, 205);
    cursor: url("@/assets/espada.png"), auto;
  }

  img:active,
  img:focus,
  img:focus-visible {
    cursor: url("@/assets/espada2.png"), auto;
  }
}
</style>