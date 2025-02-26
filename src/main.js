import { createApp } from 'vue';
import App from './App.vue';
import './style.css'
import router from './router'; // Ensure this line exists
import Toast from "vue-toastification";

const app = createApp(App);
app.use(router); // Ensure this line exists
app.use(Toast);
app.mount('#app');