<template>
  <button @click="cambiar">{{ tipo }} {{ nombre }}</button>
</template>

<script setup>
import { useProductoresStore } from "@/store/productores";
import { ref } from "vue";

const productoresStore = useProductoresStore();
const { autoRecolectar, duplicarVelocidad } = productoresStore;

const props = defineProps({
  nombre: {
    type: String,
    default: "Gnomos",
  },
  tipo: {
    type: String,
    default: "",
  },
});

const nombre = ref(props.nombre);
const tipo = ref(props.tipo);

const cambiar = () => {
  
  if (tipo.value === "autorecoleccion") {
    autoRecolectar(nombre.value);
  }

  if (tipo.value === "dobleVelocidad") {
    duplicarVelocidad(nombre.value);
  }
};




</script>

<style>
</style>