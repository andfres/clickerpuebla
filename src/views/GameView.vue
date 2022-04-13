<script setup>

import Banco from "@/components/Banco.vue";
import Mejoras from "@/components/Mejoras.vue";
import Productores from "@/components/Productores.vue";
import MenuGame from "@/components/MenuGame.vue";

</script>

<template>
  <main>
    <Banco class="banco"></Banco>

    <!-- <Productores class="productores"></Productores>
    <Mejoras >  </Mejoras> -->

    <div class="contenedor-router">
      <router-view ></router-view>
    </div>
    

    <MenuGame class="menu"></MenuGame>
  </main>
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";
main {

  .contenedor-router{
    width: 400px;
    
    --overflow-y: scroll;
    --height: 300px;
    
    
  }

  .banco, .menu, .contenedor-router{
    padding: $margin;
    margin: $margin;
  }

  .contenedor-router, .menu{
    background-color: $colorPrincipal;
  }

  .productores, .mejoras{
    max-width: 100%;
    flex: 0 0;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .banco {
    width: 100%;
    height: min-content;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
    text-align: center;
    font-size: 1.5rem;

    border: 1px solid red;
    margin: $margin; 
    position: sticky;
    top: 10px;
  
    z-index: 2;
  }

  .productores {
  
    display: flex;
    flex-direction: column;
    --max-width: 400px;
  }
}

</style>