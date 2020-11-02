import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA8iagXe17lj60uIUMjUZbZ3AYBXNKp0dw",
  authDomain: "store-edaec.firebaseapp.com",
  databaseURL: "https://store-edaec.firebaseio.com",
  projectId: "store-edaec",
  storageBucket: "store-edaec.appspot.com",
  messagingSenderId: "590634353868",
  appId: "1:590634353868:web:60e3c4f2b401e19673ee69",
  measurementId: "G-8DHW78R8EJ"
};

firebase.initializeApp(config);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
