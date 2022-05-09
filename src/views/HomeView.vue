<script setup>
</script>

<template>
  <main>
    <h1>home</h1>
  </main>

  <div class="novedades">
    <div>
      <h1>novedadades</h1>

      <ul>
        <li>Los datos se guardan automaticamente cada 30 segundos</li>
        <li>Los datos de la localStorage han sido ofuscados</li>
        <li>Creado script "deploy.sh" para la automaticación del despliegue</li>
      </ul>
    </div>

    <div>
      <h1>To do</h1>
      <ul>
        <li>Modal + teleport</li>
        <li>loggin + vuelidate?</li>

        <li>proyecto react hacer deploy ( 1º hay que setear la base, %PUBLIC_URL% )</li>
        <li>estudiar como se puede servir en una subcarpeta con live server</li>
      </ul>
    </div>

    <div>
      <h1>Problemas</h1>
      <ul>
        <li>
          reinicar el juego da fallo, reinicia la store pero los componentes no
          se actualizan, sobre todo la autogerenación
        </li>

        <li>
          setear o leer "process. env.NODE_ENV" no tira, solo usando "heroku
          config:set NODE_ENV=dev" <br />
          necestio dotenv? <br />
          devtools de vue se ven afectads por las de heroku..
        </li>

        <li>escribir en html process. env. junto peta</li>
        <li>
          usar live server en /dist sale este error: <br />
          Uncaught TypeError: Failed to resolve module specifier "vue". Relative
          references must start with either "/", "./", or "../". <br />
          usando el server que ofrece vite (preview) tira perfectamente
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