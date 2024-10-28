import { createApp } from "vue"; // Importing the createApp function from Vue
import App from "./App.vue"; // Importing the root component of your application
import router from "./router"; // Importing the router configuration
import store from "./store"; // Importing the Vuex store configuration

const app = createApp(App); // Creating a Vue application instance
app.use(store); // Registering the Vuex store with the app
app.use(router); // Registering the router with the app
app.mount("#app"); // Mounting the app to the DOM element with the ID 'app'
