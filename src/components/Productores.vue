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

import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";

const productoresStore = useProductoresStore();

const { productores } = storeToRefs(productoresStore);
</script>

<style>

</style>