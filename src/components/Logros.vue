<template>
  <div>
    <p>has desbloqueado 2/10 logros</p>


    <Logro v-for="(item, i) in logros" :key="i" v-bind="item" :logradoResultado="item.logradoFuncion()"
    cadena="sdf">
    </Logro>

  </div>
</template>

<script setup>

import Logro from "@/components/Logro.vue";
import { useStore } from '@/store/store';

const store = useStore();

const { logros } = store;



</script>

<style>
</style>