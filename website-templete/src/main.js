import Vue from 'vue'
import App from './App'
import {createRouter} from './router'
import {createStore} from './store'
if(!isNodeEnv) {
    const xcyPage = require('@/components').default
    Vue.use(xcyPage)
}
export function createApp() {
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
    return {app, router, store}
}