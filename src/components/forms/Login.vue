<template>
<div class="formulario-contenedor">
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

      <button type="submit">Submit</button>
    </form>


  </div>

      <div class="tienes_cuenta">
      <p>¿No tienes cuenta?</p>
      <RouterLink to="/registro">registrate</RouterLink>
    </div>
  </div>

</template>

<script setup>
import { login } from "@/servicios/users"
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

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
const onSubmit = handleSubmit((values) => {
  console.log("valores", values);
  login(values);
  // alert(JSON.stringify(values));
  
}, onInvalidSubmit);

// Create a form context with the validation schema

// No need to define rules for fields
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
</script>

<style lang = "scss">

</style>