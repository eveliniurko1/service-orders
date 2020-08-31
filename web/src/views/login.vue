<template>
  <div id="login">
    <div>
      <h1>Seja Bem-vinda(o) de volta!</h1>
      <div id="box-login">
        <div>
          <div class="label">
            <label>Email</label>
          </div>
          <div>
            <input class="input" type="text" name="username" v-model="username" />
          </div>
          <div class="label">
            <label>Senha</label>
          </div>
          <div>
            <input class="input" type="password" name="password" v-model="password" />
          </div>
          <router-link to="/register" id="text">Cadastrar/Esqueceu a senha</router-link>
          <button id="btn-login" type="button" v-on:click="login()">Entrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    Vue.prototype.$userId = "";
    console.log(this.$userId);
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.username, this.password)
          .then(
            (user) => {
              Vue.prototype.$userId = this.username;
              console.log(this.$userId);
              this.$router.replace({ name: "home" });
            },
            (err) => {
              window.alert("Senha ou usuário incorreto.Tente Novamente!");
            }
          );
      } else {
        window.alert("Preencha todos os campos!");
      }
    },
  },
};
</script>
<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
#box-login {
  display: flex;
  align-self: center;
  justify-content: center;
  width: 30rem;
  height: 24rem;
  margin-top: 4rem;
  margin-left: auto;
  border-radius: 5%;
  background-color: #ffffff;
}
#text {
  text-decoration: none;
  margin-left: 7.5rem;
  font-size: 20px;
  color: #123a44;
}
#btn-login {
  margin-left: 145px;
  margin-top: 25px;
}
.label {
  margin-top: 3rem;
  margin-left: 4.7rem;
}
.input {
  padding: 12px 20px;
  font-size: 20px;
  width: 18rem;
  margin-left: 4.7rem;
}
h1 {
  margin-left: 4.5rem;
}
</style>