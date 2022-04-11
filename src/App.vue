<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --margen: 0.5rem;
  --colorPrincipal: rgb(10, 76, 156);
}



body{
  background-color: rgba(211, 211, 211, 0.329) ;
}

</style>
