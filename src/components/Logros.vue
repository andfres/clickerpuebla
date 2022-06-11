<template>
  <div class="logros">
    <p>
      Has desbloqueado {{ cantidadLogrosLogrados }}/
      {{ cantidadLogros }} Trofeos
    </p>

    <div class="barra">
      <div
        class="barra-interna"
        :style="{ width: porcentaje * 100 + '%' }"
      ></div>
    </div>

    <div class="contenedor-columnas">
      <h3 class="titulo" v-if="algunoComprado">Tus Trofeos</h3>
      <Logro v-for="(item, i) in logrosLogrados" :key="i" v-bind="item">
      </Logro>

      <h3 class="titulo" v-if="!todosComprados">Trofeos bloqueados</h3>

      <Logro v-for="(item, i) in logrosNoLogrados" :key="i" v-bind="item">
      </Logro>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import Logro from "@/components/Logro.vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { logrosLogrados, logrosNoLogrados, logros } = storeToRefs(store);

const cantidadLogros = logros.value.length;

const cantidadLogrosLogrados = computed(() => {
  return logrosLogrados.value.length;
});

const porcentaje = computed(() => {
  return logrosLogrados.value.length / logros.value.length;
});

const algunoComprado = computed(() => {
  return logrosLogrados.value.length > 0 ? true : false;
});

const todosComprados = computed(() => {
  return logrosNoLogrados.value.length === 0 ? true : false;
});
</script>


<style lang="scss">
.barra {
  border: 2px solid green;
  position: relative;
  height: max(1.4rem, 20%);
  min-height: 10px;

  border-radius: 5px;
  color: rgb(15, 15, 15);

  .barra-interna {
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    border-radius: 3px;
    background-color: greenyellow;
    box-shadow: inset 0px -9px rgba(0, 0, 255, 0.1);
  }
}
</style>







