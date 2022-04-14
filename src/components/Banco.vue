<template>
  <div>
      <span> {{ recursosStore.recursos }}  💰 </span>    
  </div>
</template>

<script setup>

import { useRecursosStore } from '@/store/recursos';

const recursosStore = useRecursosStore();


</script>

<style>

</style>