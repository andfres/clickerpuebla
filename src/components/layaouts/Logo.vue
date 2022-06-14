 <template>
  <div class="contenedor-logo">
    <div class="logo">
      <img class="img" alt="" :src="corona" draggable="false" />
      <p class="letras-logo">Clicker Puebla</p>
    </div>
  </div>
</template>

<script setup>
import corona from "@/assets/img/logo/pueblo.png";
</script>

<style scoped lang="scss">
.contenedor-logo {
  display: flex;

  .logo {
    width: 125px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .img {
      width: 100%;
    }

    border-radius: 10px;
    padding: 5px;
  }
}

.letras-logo {
  width: 200px;
  text-align: center;
  font-size: 1.4rem;
  z-index: 2;
  color: rgb(0, 0, 0);
}
</style>