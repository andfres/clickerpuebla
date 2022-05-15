<template>
  <div  v-if="showModal" class="modal" >
    <div class="modal-content">
      <button class="botton-cerrar" @click="$emit('close')">X</button>{{ showModal}}
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import { ref , computed} from "vue";

const props = defineProps({
  nombre: String,
  showModal:Boolean
});

defineEmits("close")

const cerrar = () => {
  props.showModal = false
};


</script>

<style lang = "scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(17, 17, 17, 0.699);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    padding: 1rem;

    .botton-cerrar {
      position: absolute;
      top: -2.7rem;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;

      &:hover {
        color: black;
      }
    }
  }
}
</style>