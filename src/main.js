// import { createApp } from "vue";
// import App from "./App.vue";
// import wrapperComponent from "./wrapperComponent.vue";
// import router from "./routes/index";

// // createApp(App).mount('#app')
// createApp(wrapperComponent).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import wrapperComponent from "./wrapperComponent.vue";
import router from "./routes/index";
import { createPinia } from "pinia";

const pinia = createPinia();
// createApp(App).mount('#app')
createApp(wrapperComponent).use(router).use(pinia).mount("#app");
