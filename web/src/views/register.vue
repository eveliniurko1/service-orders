<template>
  <fieldset id="register">
    <legend>Área de Registro de novos Clientes</legend>
    <label class="label">Nome</label>
    <input class="input" type="text" name="name" v-model="client.name" />
    <label class="label">Endereço</label>
    <input class="input" type="text" name="adress" v-model="client.adress" />
    <label class="label">Telefone</label>
    <input class="input" type="text" name="phone" v-model="client.phone" />
    <label class="label">e-mail</label>
    <input class="input" type="text" name="email" v-model="client.email" />
    <label class="label">Senha</label>
    <input class="input" type="password" name="email" v-model="client.password" />
    <button id="btn" type="button" v-on:click="register()">Cadastrar</button>
    <button id="btn" type="button" v-on:click="logOut()">Sair</button>
  </fieldset>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import Client from "../services/clients";

export default {
  name: "Register",
  data() {
    return {
      client: {
        name: "",
        adress: "",
        phone: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.client.name != "" &&
        this.client.adress != "" &&
        this.client.phone != "" &&
        this.client.email != "" &&
        this.client.password != ""
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.client.email,
            this.client.password
          )
          .then(
            (user) => {
              Vue.prototype.$userId = this.client.email;
              console.log(this.$userId);
              this.$router.replace("home");
            },
            (err) => {
              window.alert("Tente novamente! " + err.message);
            }
          );

        Client.addOrder(this.client).then((res) => {
          alert("Salvo com sucesso!");
        });
      } else {
        window.alert("Preencha todos os campos!");
      }
    },
    logOut() {
      this.$router.replace("login");
    },
  },
};
</script>

<style scoped>
legend {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 2rem;
  color: #257587;
  margin-left: 9rem;
  border-radius: 2%;
}
#register {
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  background-color: #ffffff;
  border-radius: 5%;
  margin: 4rem 10rem;
}
#btn {
  margin-left: 15rem;
  margin-top: 1rem;
}
.label {
  margin: 0rem 6rem;
}
.input {
  padding: 0.5rem 1rem;
  width: 30rem;
  margin-bottom: 1rem;
  margin-left: 6rem;
}
</style>