<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



body{
  background-image: url("/src/assets/fondo.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh ;
  --overflow-y: hidden;
}

nav{
  color: white;

  a{color: white}
}
</style>
