<template>
  <div>
  
    <div class="menu-i">
      <RouterLink class="router-link" to="/game">Trabajo</RouterLink>
      <RouterLink class="router-link" to="/game/managers">Managers</RouterLink>
      <RouterLink class="router-link" to="/game/mejoras">Mejoras</RouterLink>
      <RouterLink class="router-link" to="/game/logros">Logros</RouterLink>
      <!-- <RouterLink class="router-link volver"  to="/game">></RouterLink> -->
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.menu-i {
  color: white;
  display: flex;
  gap: 10px;
  margin-bottom: 1rem ;


  .router-link{
    font-size: 1.3rem;
    padding: 5px;
    border: 2px solid white;
    border-radius: 10px;
    
    &:hover{
      background-color: orange ;
      color: black;
    }
  }

  

  .volver{
    margin-left: auto;
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>