import { createApp } from 'vue'
import App from './App.vue'
import {VueCsvImportPlugin} from "vue-csv-import";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(VueCsvImportPlugin).mount('#app')
