<template>
  <div class="formulario-contenedor">
    <div v-if="eraMensajeOK" class="mensajeOk">
      <p>Regristro completado con exito</p>
      <p>Ahora puedes iniciar sesión</p>
    </div>
    <div class="formulario">
      <h2 class="titulo-form">Login</h2>
      <form @submit="onSubmit">
        <div class="form-grup">
          <label for="email">Email</label>
          <input name="email" id="email" v-model="email" />
          <span>{{ emailError }}</span>
        </div>
        <div class="form-grup">
          <label for="password">Contraseña</label>
          <input
            name="password"
            id="password"
            v-model="password"
            type="password"
          />
          <span>{{ passwordError }}</span>
        </div>

        <div class="continuar">
          <button type="submit">Continuar</button>
        </div>
      </form>

      <span style="color: red" v-if="msg_error"> {{ msg_error }} </span>
      <span style="color: green" v-if="msg_ok"> {{ msg_ok }} </span>
    </div>

    <div v-if="!eraMensajeOK" class="tienes_cuenta">
      <p>¿No tienes cuenta?</p>
      <RouterLink to="/registro">registrate</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import servicios from "@/servicios";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import router from "@/router";


const msg_error = ref("");
const msg_ok = ref("");

const store = useStore();
const { mensajeOk } = storeToRefs(store);

const eraMensajeOK = store.mensajeOk;

console.log("mensajeOk", mensajeOk.value);
mensajeOk.value = false;

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(1),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

function onInvalidSubmit({ values, errors, results }) {
  console.log("invalidsubmit");
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

// const onSubmit = handleSubmit((values) => {
//   console.log("valores", values);
//   servicios.login(values);
//   // alert(JSON.stringify(values));
// }, onInvalidSubmit);

const onSubmit = handleSubmit(async (values) => {
  msg_error.value = "";
  try {
    await servicios.login(values);
    console.log("fin login")

    router.push("/");
  } catch (e) {
    msg_error.value = e.message;
  }

  console.log("msg_Error", msg_error.value);
}, onInvalidSubmit);

// Create a form context with the validation schema

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
</script>

<style lang = "scss">
.mensajeOk {
  background-color: rgb(185, 243, 170);
  width: 270px;
  border-radius: 10px;
  padding: 1rem;
}
</style>