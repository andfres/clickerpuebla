<script setup>
import Banco from "@/components/Banco.vue";
import Productor from "@/components/Productor.vue";
import Mejoras from "@/components/Mejoras.vue";
import { creaProductores } from "@/utils/creaProductores";

import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";

const productoresCreados = creaProductores();
const productoresStore = useProductoresStore();

productoresStore.productores = [...productoresCreados];
const { productores } = storeToRefs(productoresStore);


</script>

<template>
  <main>
    <Banco class="banco"></Banco>

    <div class="productores">
      <Productor
        v-for="(item, i) in productores"
        :key="i"
        v-bind="productores[i]"
      >
      </Productor>
    </div>

    <Mejoras />
  </main>
</template>



<style lang="scss" scoped >
main {
  display: flex;
  flex-wrap: wrap;
  .banco {
    flex-shrink: 1;
    background-color: var(--colorPrincipal);
    padding: var(--margen);
    margin: var(--margen);
  }

  .productores {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--colorPrincipal);
    padding: var(--margen);
    margin: var(--margen);
    gap: 10px;
  }
}
</style>