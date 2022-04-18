<template>
  <div>
      {{gasto}}
  </div>
</template>

<script setup>

const props = defineProps({
  gasto: {
    type: Number,
    default: 100,
  }
})

</script>

<style>

</style>