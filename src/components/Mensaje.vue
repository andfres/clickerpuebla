<template>
  <div class="mensaje" :class="{ oculto: oculto }">
    <div v-html="mensaje"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";
import { ref, watch } from "vue";

const store = useStore();
const { mensaje } = storeToRefs(store);
const oculto = ref(true);

const ocultar = () => {
  oculto.value = !oculto.value;
};

const toggleVisible = () => {
  oculto.value = !oculto.value;
};

watch(mensaje, (val) => {
  oculto.value = false;
  setTimeout(() => ocultar(), 1000);
});

// :class="oculto ? 'oculto' : 'visible'">
//:class="{'oculto': oculto}">
</script>

<style lang="scss">
.mensaje {
  background-color: rgb(241, 254, 222);
  // width: 200px;
  min-height: 100px;
  max-width: 200px;
  padding: 1rem;
  border: 5px solid rgb(23, 255, 23);
  color: black;
  border-radius: 10px;

  --position: absolute;
  --position: sticky;
  position: fixed;

  top: 50%;
  left: 50%;
  z-index: 9;

  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;

  p {
    //border: 2px solid red;
    height: min-content;
    text-align: center;
  }
}

.oculto {
  opacity: 0;
  height: 0;
  padding: 0;
  transition: height 0ms 2000ms, padding 0ms 2000ms, opacity 1000ms 0ms;
}

.visible {
  /* opacity: 100%;
  height: 0;
  padding: 0; */
}

.nombreProductor{
  font-size: 1.2rem;
}
</style>