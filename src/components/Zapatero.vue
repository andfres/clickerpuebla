<template>
    <p>Siempre puedes trabjar tu mismo</p>
    <p>Limpia zapatos para ganarte un dinerillo</p>
    <div 
    ref="div"
    class="zapato" > 
        <img  @click="limpiarZapato" alt="" class=""  :src="`/src/assets/zapatos/1.png`"
         draggable="false" />
    </div>

    <!-- <div class="prueba">ees</div> -->
</template>

<script setup>
//    @mousemove="limpiarZapato"

import { ref } from "vue";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";


const store = useStore();
const { sePuedeComprar, comprar, cambiarMensaje } = store;
const div = ref(null)

const ganacias = 10000000

const limpiarZapato= () => {
    console.log("eee")
    comprar(ganacias)
    animacionDinero(div.value, ganacias, true)
   
}

</script>



<style lang="scss">

.zapato{
    height: min-content;
    background-color: rgb(50, 171, 205);
    
    img{
        min-width: 150px;
        cursor: url('@/assets/cepillo.png'), auto;
     }
}


// .prueba{
//     width: 500px;
//     height: 500px;
//     background-color: red;
//     background-image: url('@/assets/cepillo.png');
// }

</style>