<template>
   <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <!-- <RouterLink to="/game">Game</RouterLink> -->
    </nav>

    <nav>
      <RouterLink to="/registro">Registro</RouterLink> |
      <RouterLink to="/login">Login</RouterLink> |
      <!-- <RouterLink to="/game">Game</RouterLink> -->
    </nav>
  </header>
</template>

<script setup>


import { RouterLink, RouterView } from "vue-router";


</script>



<style lang="scss">

</style>