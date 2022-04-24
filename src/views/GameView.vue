<script setup>
import Banco from "@/components/Banco.vue";
import Productores from "@/components/Productores.vue";
import Managers from "@/components/Managers.vue";
import MenuGame from "@/components/MenuGame.vue";
</script>

<template>
  <main>
    <Banco class="banco"></Banco>

    <div class="contenedor-router">
      <Productores></Productores>
    </div>

    <div class="menu">
      <MenuGame class="menu-nav"></MenuGame>
      <router-view class=""></router-view>
    </div>
  </main>
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  .contenedor-router {
    flex: 0 0 300px;
  }

  .menu {
    flex: 0 0 300px;
  }

  .banco,
  .menu,
  .contenedor-router,
  .routerview,
  .modal {
    padding: $margin;
    margin: $margin;
  }

  .contenedor-router,
  .menu {
    background-color: $colorPrincipal;
  }

  .banco {
    width: 100%;
    height: min-content;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    text-align: center;
    font-size: 1.5rem;

    margin: $margin;
    position: sticky;
    top: 10px;

    z-index: 2;
  }

  .productores {
    display: flex;
    flex-direction: column;
    align-items: center;
    --max-width: 400px;
  }

  .modal {
    position: absolute;
    top: 5rem;
    background: rgba(17, 17, 17, 0.699);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: var(--max-width);

    .routerview {
      border: 2px solid red;
      max-width: 499px;
      background-color: $colorPrincipal;
    }
  }
}
</style>