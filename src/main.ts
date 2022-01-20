import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createPinia } from 'pinia';
import directive from './directive';

createApp(App).use(directive).use(createPinia()).mount('#app');
