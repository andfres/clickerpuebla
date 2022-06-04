<template>
  <div class="modal">
    <div class="modal-content">
      <Registro />
    </div>
  </div>

</template>


<script setup>
import Registro from "@/components/forms/Registro.vue";
</script>

<style lang="scss">
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
  }
}
</style>
