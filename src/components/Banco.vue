<template>
  <div>
      <span> {{ store.recursos }}  💰 </span>    
  </div>
</template>

<script setup>

import { useStore } from '@/store/store';
const store = useStore();


</script>

<style>

</style>