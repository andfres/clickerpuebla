<template>
  <div class="formulario">
    <h2 class="titulo-form">Registro</h2>
    <form @submit="onSubmit">
      <div class="form-grup">
        <label for="nombre">Intruduce tu nombre</label>
        <input name="nombre" id="nombre" v-model="nombre" />
        <span>{{ nombreError }}</span>
      </div>

      <div class="form-grup">
        <label for="alias">Elige un alias</label>
        <input name="alias" id="alias" v-model="alias" />
        <span>{{ aliasError }}</span>
      </div>

      <div class="form-grup">
        <label for="email">Email</label>
        <input name="email" id="email" v-model="email" />
        <span>{{ emailError }}</span>
      </div>

      <div class="form-grup">
        <label for="password">Elige una contraseña</label>
        <input
          name="password"
          id="password"
          v-model="password"
          type="password"
        />
        <span>{{ passwordError }}</span>
      </div>

      <div class="form-grup">
        <label for="passwordConfirmation">Repite la contraseña</label>
        <input
          name="passwordConfirmation"
          id="passwordConfirmation"
          v-model="passwordConfirmation"
          type="password"
        />
        <span>{{ passwordConfirmationError }}</span>
      </div>

      <button type="submit">Submit</button>


      <span style="color: red" v-if="msg_error"> {{ msg_error}} </span>
      <span style="color: green" v-if="msg_ok"> {{ msg_ok}} </span>

    </form>

    <div>
      <p>¿Ya tienes cuenta?</p>
      <RouterLink to="/login">inicia sesión</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { registro } from "@/servicios/users"
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
    nombre: yup.string().required().min(1).max(20),
    alias: yup.string().required().min(1),
    email: yup.string().required().email(),
    password: yup.string().required().min(1),
    passwordConfirmation: yup.string()
   .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}
const onSubmit = handleSubmit( async (values) => {

  msg_error.value = '';
  msg_ok.value = '';

  try {
    await registro(values);

    msg_ok.value = 'Registro ok';

  } catch (e) {
    msg_error.value = e.message;
  }


  // alert(JSON.stringify(values));
  // console.log(values);


}, onInvalidSubmit);


const { value: nombre, errorMessage: nombreError } = useField("nombre");
const { value: alias, errorMessage: aliasError } = useField("alias");
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: passwordConfirmation, errorMessage: passwordConfirmationError } = useField("passwordConfirmation");

const msg_error = ref("");
const msg_ok = ref("");


</script>

<style lang = "scss">
.formulario {
  .titulo-form {
    text-align: center;
  }
  .form-grup {
    display: flex;
    flex-direction: column;
  }
}
</style>