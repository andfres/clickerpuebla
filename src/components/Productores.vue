<template>
  <div class="productores">
    <Productor
      v-for="(item, i) in productores"
      :key="i"
      v-bind="productores[i]"
      :autoRecolectar="managers[i].contratado"
      :id="i"
    >
    </Productor>
  </div>
</template>

<script setup>

import Productor from "@/components/Productor.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";

const store = useStore();
const { productores, managers } = storeToRefs(store);


</script>

<style>


</style>