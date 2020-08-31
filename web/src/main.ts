import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCCjeItoHR78M8tLbE1qWX9-JJl4w6cA50",
  authDomain: "uplanner-auth-b60d0.firebaseapp.com",
  databaseURL: "https://uplanner-auth-b60d0.firebaseio.com",
  projectId: "uplanner-auth-b60d0",
  storageBucket: "uplanner-auth-b60d0.appspot.com",
  messagingSenderId: "1080699090187",
  appId: "1:1080699090187:web:350a985e937e5998f2de0e"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
