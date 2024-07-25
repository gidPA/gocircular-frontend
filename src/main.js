import { createApp } from 'vue'
import { createPinia } from 'pinia';

//import './style.css';

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';  // Theme
import 'primevue/resources/primevue.min.css';            // Core CSS
import 'primevue/toastservice';                          // Toast Service
import 'primeicons/primeicons.css';                      // Icons
import 'primeflex/primeflex.css';                        // Primeflex


const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(PrimeVue)
app.mount('#app')
