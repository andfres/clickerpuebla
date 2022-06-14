<template>
  <div>
    <div class="menu-i">
      <!-- <RouterLink class="router-link" to="/game">Trabajo</RouterLink> -->

      <RouterLink class="router-link" :to="`/game/${ultimo_trabajo}`"
        >Trabajo</RouterLink
      >
      <RouterLink class="router-link" to="/game/managers">Managers</RouterLink>
      <RouterLink class="router-link" to="/game/mejoras">Mejoras</RouterLink>
      <RouterLink class="router-link" to="/game/logros">Logros</RouterLink>
      <RouterLink class="router-link" to="/game/clasificacion">Clasificacion</RouterLink>
      <!-- <RouterLink class="router-link volver"  to="/game">></RouterLink> -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";

const store = useStore();
const { ultimo_trabajo } = storeToRefs(store);
</script>

<style lang="scss">
.menu-i {
  color: white;
  margin-bottom: 1rem;

   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;

  // display: grid;
  // grid-template-columns: auto;
  gap: 10px;

  .router-link {
    // flex: 1 1;

    font-size: calc(1rem + 0.2vw);
    padding: 5px;
    border: 2px solid white;
    border-radius: 10px;
    // display: block;

    &:hover {
      background-color: orange;
      color: black;
    }
  }

  .volver {
    margin-left: auto;
  }
  a {
    color: white;
    text-decoration: none;
  }

  //.router-link-active
  .router-link-exact-active {
    background-color: aqua;
    color: black;
  }
}


</style>