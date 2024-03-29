import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import FileUpload from 'primevue/fileupload';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app')