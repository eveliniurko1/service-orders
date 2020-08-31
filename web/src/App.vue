<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
};
</script>

<style>
body {
  background-color: #f0f0f7;
}
h1 {
  font-weight: bold;
  font-size: 26px;
  padding: 0;
  margin-top: 2rem;
  color: #257587;
}
button {
  width: 198px;
  height: 45px;
  margin-left: 15rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 6.8px;
  background: #257587;
}
label {
  color: #2a535c;
  font-size: 22px;
}
input {
  border: 1px solid #59b1c5;
  border-radius: 6.8px;
  background: #f8f8fc;
  font-size: 20px;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>