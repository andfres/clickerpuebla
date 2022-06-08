 <template>
    <div class="contenedor-logo">

      <div class="logo">
        <img class="img" alt="" :src="corona"  draggable="false"/>
        <p class="letras-logo">Clicker Puebla</p>
      </div>
    </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.contenedor-logo {
  display: flex;
  justify-content: center;

  .logo {
    background-color: rgb(254, 255, 253);
    width: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      width: 90px;
      height: 40px;
    }

    .letras-logo {
      font-size: 1.5rem;
    }

    border-radius: 10px;
    padding: 5px;
  }

}
</style>