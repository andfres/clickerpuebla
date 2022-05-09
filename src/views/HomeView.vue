<script setup>
</script>

<template>
  <main><h1>home</h1></main>

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
      </ul>
    </div>
  </div>
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";

.novedades {
  border: 1px solid red;
  padding: 2rem;
  margin: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.717);
  flex-wrap: wrap;

  display: flex;
  gap: 3rem;

  li {
    font-size: 1.5rem;
  }
}
</style>