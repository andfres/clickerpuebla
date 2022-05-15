<template>
  <Header></Header>

  <button @click="visible = true">mostrar ocultar modal</button>
  <teleport to="body">
    <Modal v-bind:showModal="visible" @close="visible = false">
      <Loggin />
    </Modal>
  </teleport>

  <div class="novedades">
    <div>
      <h1>To do</h1>
      <ul>
        <li>en login y registro rutas a home  y entre ellas </li>
        <li>almacenar el estado del tiempo de creación de los edificios</li>
        <li>
          estudiar que bash de git no se cierre despues de ejecutar script sh
        </li>
        <li>crear los servicios</li>
  
        <li>[X] Los datos se guardan automaticamente cada X segundos</li>
        <li>[X] Los datos de la localStorage han sido ofuscados</li>
        <li>[X] deploy API de prueba spring + posgrest</li>
        <li>[X] Modal + teleport (en about)</li>
        <li>[X] formulario -> vee-Validate + yup</li>
        <li>[X] hacer deploy proyecto react</li>
        <li>[X] estudiar como lanzar LIVE SERVER en una subcarpeta</li>
        <li>
          [X] Creado script "deploy.sh" para la automaticación del despliegue
        </li>
      </ul>
    </div>

    <div>
      <h1>Problemas</h1>
      <ul>
        <li>escribir en html process. env. junto peta</li>
      </ul>
    </div>
    <div>
      <h1>Arreglos</h1>
      <ul>
        <li>
          reinicar el juego solo se reiniciaba la store pero no la localStorage
        </li>
      </ul>
    </div>


  </div>
</template>




<script setup>
import Header from "@/components/layaouts/Header.vue";
import Modal from "@/components/layaouts/Modal.vue";
import Loggin from "@/components/forms/Loggin.vue";
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="scss">
.modal_child {
  background-color: red;
}

.novedades {
  font-family: "arial";
  border: 1px solid red;
  padding: 2rem;
  margin: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.717);
  flex-wrap: wrap;

  display: flex;
  gap: 3rem;

  li {
    margin: 8px;
  }
}
</style>
