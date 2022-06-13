<template>
  <div class="links_trabajos">
    <RouterLink class="router-link" to="/game">Limpia Botas</RouterLink>
    <RouterLink class="router-link" to="/game/fantasmas"
      >Mata Fantasmas</RouterLink
    >
  </div>
  <router-view class=""></router-view>
</template>

<script setup>
</script>



<style lang="scss">
.links_trabajos {
  display: flex;
  color: white;
  margin-bottom: 1rem;
  display: flex;

  gap: 10px;

  .router-link {

    font-size: calc(1rem + 0.2vw);
    padding: 5px;


    &:hover {
      //background-color: orange;
      color: black;
    }
  }

    a {
    color: white;
    --text-decoration: none;
  }
}
</style>