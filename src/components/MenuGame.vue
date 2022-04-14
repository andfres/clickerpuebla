<template>
  <div>
    <h3>Menú</h3>
    <div class="menu-i">
      <RouterLink to="/game/pueblo">Pueblo</RouterLink>
      <RouterLink to="/game/mejoras">Mejoras</RouterLink>
      <RouterLink to="/game/managers">Managers</RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.menu-i {
  color: white;
  display: flex;
  flex-direction: column;
  a {
    color: white;
  }
}
</style>