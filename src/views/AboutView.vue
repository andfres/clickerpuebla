<template>
  <main class="about">
    <h1>This is an about page</h1>
  </main>

  <button @click="visible = true">mostrar ocultar modal</button>
  <teleport to="body"> 
  <Modal v-bind:showModal="visible" @close="visible = false">
    <Loggin />
  </Modal>
</teleport>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import Loggin from "@/components/forms/Loggin.vue";
import { ref } from "vue";

const visible = ref(false);
</script>

<style>
.modal_child {
  background-color: red;
}
</style>
