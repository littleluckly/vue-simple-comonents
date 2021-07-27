import Vue from "vue";
import App from "./App.vue";
import { message } from "./components/ti-message/index";

Vue.config.productionTip = false;
Vue.prototype.$message = message;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
