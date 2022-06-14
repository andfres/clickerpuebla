<template>
  <div class="userClasi">

    <div class="nick">
      <p>{{ nickName }}</p>
    </div>

    <div class="dinero">
      <p>{{ dinero }} 💰</p>
    </div>

  </div>


</template>

<script setup>




const props = defineProps({
  nickName: String,
  dinero: Number,
});




</script>

<style lang="scss">
.userClasi {
  height: min-content;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: space-between;
  color: white;

  div {
    /* border: 1px solid gold; */
    p {
      /* border: 1px solid green; */
      text-align: center;
    }
  }

  .nick {
    flex: 1 1 50%;
  }

  .dinero {
    flex: 1 1 50%;
  }
}
</style>