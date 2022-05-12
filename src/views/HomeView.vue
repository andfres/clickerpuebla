<script setup>
</script>

<template>
  <main>
    <h1>home</h1>
  </main>

  <div class="novedades">
    <div>
      <h1>To do</h1>
      <ul>
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
        <li>con "disabled cache" en devtools las imagenes de los managers al reiniciar cambian <br>
        las imagnes ya no son estaticas (no estan en la carpeta public) aun asi sigue fallando <br>
        depende de la conexion de internet, voy a probar cargando todas las imagnes en el componente</li>
        <li>escribir en html process. env. junto peta</li>
        <li>
          usar live server en /dist sale este error: <br />
          Uncaught TypeError: Failed to resolve module specifier "vue". Relative
          references must start with either "/", "./", or "../". <br />
          usando el server que ofrece vite (preview) tira perfectamente
        </li>
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

    <!-- <div>
      <h1>Problemas resueltos</h1>
      <ul></ul>
    </div> -->
  </div>
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";

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