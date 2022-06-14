<template>
  <header class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>

    <RouterLink to="/"><Logo /></RouterLink>

    <nav v-if="logeado">
      <button @click="logout">Log Out</button>
    </nav>

    <nav v-else class="nav">
      <RouterLink to="/registro">Registro</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "./Logo.vue";

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

import { onMounted, computed } from "vue";

const store = useStore();

const { usuario } = storeToRefs(store);

const logeado = computed(() => {
  if (usuario.value.nombre != "") return true;
  return false;
});

const logout = () => {
  console.log("usuario.value", usuario.value);
  usuario.value = { nombre: "", nickName: "", email: "", rol: "" };
  console.log("usuario.value", usuario.value);
};
</script>



<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.781);
  padding: 0 2rem;
  margin: 0.5rem 0;
  align-items: center;
  position: relative;
  height: 60px;
  min-height: 60px;

  nav {
    display: flex;
    gap: 10px;

    a {
      color: black;

      &.navrouter-link-active,

      &.router-link-exact-active {
        display: none;
      }

      &:hover {
        color: rgb(21, 0, 255);
      }
    }
  }
}
</style>