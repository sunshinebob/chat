import Vue from 'vue'
import App from './App'

// import './common/js/components.js'
import divider from './components/common/divider.vue'

Vue.component('divider', divider)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
