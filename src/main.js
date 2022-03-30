import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/star'

Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag)
Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App)
}).$mount('#app')
