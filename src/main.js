import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuelidate from "vuelidate";
import Notification from "vue-notification";
import "../src/assets/variable.scss";

Vue.use(Vuelidate);
Vue.use(Notification);
Vue.config.productionTip = false;

axios.defaults.baseURL =
  "https://online-library-auth-default-rtdb.firebaseio.com";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
