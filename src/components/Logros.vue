<template>
  <div>
    <p>has desbloqueado 2/10 logros</p>
    <button @click="aumentarContador">aumentar {{contador}}</button>

    <Logro v-for="(item, i) in logros" :key="i" v-bind="item">
    </Logro>
  </div>
</template>

<script setup>
import { ref , watch } from "vue";
import Logro from "@/components/Logro.vue";
import { useStore } from "@/store/store";

const store = useStore();

// const { logros } = store;

const logros = [
  {
    id: "dinero1",
    cantidad: 5,
    logrado: false,
    titulo: "buen inicio",
    descripcion: "almacenar 200 monedas",
    imagen: "trophy",
    fecha: "null",
  },
  {
    id: "dinero2",
    cantidad: 8,
    logrado: false,
    titulo: "el amo del pueblo",
    descripcion: "almacenar 1000 monedas",
    imagen: "trophy",
    fecha: "null",
  },
  {
    id: "dinero3",
    cantidad: 10,
    logrado: false,
    titulo: "el amo del pueblo",
    descripcion: "almacenar 1000 monedas",
    imagen: "trophy",
    fecha: "null",
  },
];

const contador = ref(0);

const aumentarContador = () => {
  contador.value += 1;
};

let bandera = 0;

watch(contador, (newContador, oldContador) => {

   if (bandera === logros.length ) return; 
   if (contador.value >= logros[bandera].cantidad ){
     logros[bandera].logrado = true;
     console.log("eee", logros[bandera].logrado );
     
     bandera += 1;
   }

})


</script>

<style>
</style>