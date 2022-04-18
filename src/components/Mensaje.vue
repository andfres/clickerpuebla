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
  setTimeout(() => ocultar(), 2000);
});

// :class="oculto ? 'oculto' : 'visible'">
//:class="{'oculto': oculto}">
</script>

<style lang="scss">
.mensaje {
  background-color: rgb(241, 254, 222);
  width: 200px;
  height: 90px;

  border: 5px solid rgb(23, 255, 23);
  color: black;
  border-radius: 10px;

  position: fixed;

  top: calc(50% - 90px / 2);;
  z-index: 9;

  left: calc(50% -  100px);;

  --transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;


  p {
    //border: 2px solid red;
    height: min-content;
    text-align: center;
  }
}

.oculto {
  opacity: 0;
  height: 0 ;
  padding: 0;
  margin: 0;
  border: 0;
  transform: translate(-500px, 0);

  transition: transform 1000ms 0ms ,opacity 500ms 500ms , height 0ms 2000ms, padding 0ms 2000ms,;
  pointer-events: none;

}


.nombreProductor{
  font-size: 1.2rem;
}
</style>