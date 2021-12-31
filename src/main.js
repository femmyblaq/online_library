import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
//import './styles/main.scss'   // import global app style file

Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://online-library-auth-default-rtdb.firebaseio.com";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
