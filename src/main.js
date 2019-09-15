import Amplify from "aws-amplify";
import Vue from "vue";
import App from "./App.vue";
import aws_exports from "./aws-exports";
import router from "./router";

Amplify.configure(aws_exports);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
