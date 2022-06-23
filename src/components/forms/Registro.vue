<template>
  <div class="formulario-contenedor">
    <div class="formulario">
      <h2 class="titulo-form">Registro</h2>
      <form @submit="onSubmit" id="registro" ref="re">
        <div class="form-grup">
          <label for="nombre">Intruduce tu nombre</label>
          <input
            name="nombre"
            id="nombre"
            v-model="nombre"
            :placeholder="'Juan Manuel'"
          />
          <span class="error">{{ nombreError }}</span>
        </div>

        <div class="form-grup">
          <label for="alias">Elige un alias</label>
          <input
            name="alias"
            id="alias"
            v-model="alias"
            :placeholder="'El elegido'"
          />
          <span class="error">{{ aliasError }}</span>
        </div>

        <div class="form-grup">
          <label for="email">Email</label>
          <input
            name="email"
            id="email"
            v-model="email"
            :placeholder="'juan2452@hotmail.com'"
            autocomplete="new-password"
          />
          <span class="error">{{ emailError }}</span>
        </div>

        <div class="form-grup">
          <label for="password">Elige una contraseña</label>
          <input
            name="password"
            id="password"
            v-model="password"
            type="password"
            autocomplete="new-password"
          />
          <span class="error">{{ passwordError }}</span>
        </div>

        <div class="form-grup">
          <label for="passwordConfirmation">Repite la contraseña</label>
          <input
            name="passwordConfirmation"
            id="passwordConfirmation"
            v-model="passwordConfirmation"
            type="password"
            autocomplete="new-password"
          />
          <span class="error">{{ passwordConfirmationError }}</span>
        </div>

        <div class="continuar">
          <button type="submit">Continuar</button>
        </div>

        <span style="color: red" v-if="msg_error"> {{ msg_error }} </span>
        <span style="color: green" v-if="msg_ok"> {{ msg_ok }} </span>
      </form>
    </div>
    <div class="tienes_cuenta">
      <p>¿Ya tienes cuenta?</p>
      <RouterLink to="/login">inicia sesión</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import servicios from "@/servicios";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import router from "@/router";

const store = useStore();
const { mensajeOk } = storeToRefs(store);

const msg_error = ref("");
const msg_ok = ref("");


const requerido = ('Campo requerido')

const schema = yup
  .object({
    nombre: yup.string().required(requerido).min(4, 'Minimo 4 caracteres').max(20, 'Demasiados caracteres'),
    alias: yup.string().required(requerido).min(4, 'Minimo 4 caracteres'),
    email: yup.string().required(requerido).email('Formato de email incorrecto'),
    password: yup.string().required().min(4, 'La contraseña debe tener minimo 4 caracteres'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
  })
  .shape({
    
    
  
  });

const { handleSubmit } = useForm({
  validationSchema: schema,
});

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}


const onSubmit = handleSubmit(async (values) => {
  msg_error.value = "";
  msg_ok.value = "";
  try {
    await servicios.registro(values);
    msg_ok.value = "Registro ok";
    mensajeOk.value = true;
    router.push("/login");
  } catch (e) {
    msg_error.value = e.message;
  }

  console.log("msg_Error", msg_error.value);
}, onInvalidSubmit);

const { value: nombre, errorMessage: nombreError } = useField("nombre");
const { value: alias, errorMessage: aliasError } = useField("alias");
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: passwordConfirmation, errorMessage: passwordConfirmationError } =
  useField("passwordConfirmation");
</script>

<style lang = "scss">
@import "@/scss/_variables.scss";

.formulario,
.tienes_cuenta {
  background-color: white;
  width: 270px;
  border-radius: 10px;
  padding: 1rem;
}

.formulario-contenedor {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formulario {
  .titulo-form {
    text-align: center;
    margin-bottom: 10px;
  }

  .form-grup {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }

  .error {
    color: red;
    font-size: 14px;
  }

  .continuar {
    display: flex;
    justify-content: center;

    button {
      font-size: 16px;
      margin: 5px;
      padding: 7px;
      background-color: $colorPrincipal;
      color: white;
      border-radius: 10px;
      border: 2px solid rgb(255, 255, 255);
    }
  }
}

.tienes_cuenta {
  display: flex;
  gap: 10px;
}
</style>