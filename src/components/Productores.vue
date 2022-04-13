<template>
      <div class="productores">
      <Productor
        v-for="(item, i) in productores"
        :key="i"
        v-bind="productores[i]"
      >
      </Productor>
    </div>
</template>

<script setup>
import Productor from "@/components/Productor.vue";

import { creaProductores } from "@/utils/creaProductores";

import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";

const productoresCreados = creaProductores();
const productoresStore = useProductoresStore();

productoresStore.productores = [...productoresCreados];
const { productores } = storeToRefs(productoresStore);



</script>

<style>

</style>