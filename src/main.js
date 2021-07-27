import { createApp } from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont';
import './assets/iconfont/iconfont.css';

import {setupGlobalComponent} from './components/index'

const app = createApp(App)

setupGlobalComponent(app)

app.mount('#app')
