<template>
  <Header></Header>

  <!-- <button @click="visible = true">mostrar ocultar modal</button>
  <teleport to="body">
    <Modal v-bind:showModal="visible" @close="visible = false">
      <Login />
    </Modal>
  </teleport> -->

  <div class="novedades">
    <!-- 
    <div>
      <h1>To do</h1>
      <ul>
        almacenar el estado del tiempo de creación de los edificios
        crear los servicios

        
        
        [] jwt (prioritario) 
        [] modificar edificios?
        [] buscar x paginador 

        [X] devolver usuario name y puntos x puntos
        [X] alamacenar datos prueba server (prioritario)
        
        [X] swagger (prioritario)
        
        [] mejorar formularios  (poco prioritario)
        [] estilo carga  (poco prioritario)
        
        [] clasificatoria modal? arriba del jueguito? o donde?

        [] mejorar sh para que cargue desde otra rama de github (poco prioritario)
        [] mejorar mejoras
        [] empezar documentacion


        <li> descubir xq escribir en html process. env. junto peta</li>
        <li>[X] aprender a inicializar la base de datos</li>
        <li>[X] cargar imagenes antes de poder jugar</li>
        <li>[X] estudiar que bash de git no se cierre despues de ejecutar script sh</li>
        <li>[X] Los datos se guardan automaticamente cada X segundos</li>
        <li>[X] Los datos de la localStorage han sido ofuscados</li>
        <li>[X] deploy API de prueba spring + posgrest</li>
        <li>[X] Modal + teleport (en about)</li>
        <li>[X] formulario -> vee-Validate + yup</li>
        <li>[X] hacer deploy proyecto react</li>
        <li>[X] estudiar como lanzar LIVE SERVER en una subcarpeta</li>
        <li>[X] Creado script "deploy.sh" para la automaticación del despliegue</li>
      </ul>
    </div>

    -->
  </div>
</template>




<script setup>
import Header from "@/components/layaouts/Header.vue";

// import Modal from "@/components/layaouts/Modal.vue";
// import Login from "@/components/forms/Login.vue";
// import { ref } from "vue";
// const visible = ref(false);
</script>

<style lang="scss">
.modal_child {
  background-color: red;
}

.novedades {
  font-family: "arial";
  border: 1px solid white;
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
