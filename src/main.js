import Vue from 'vue'
import Store from './plugins/store'
import Router from './plugins/router'
import VueRx from 'vue-rx'
import App from './App.vue'
import Service from './plugins/axios'
import {util, valid} from './plugins'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.prototype.$service = Service
Vue.prototype.$util = util
Vue.prototype.$valid = valid
Vue.config.productionTip = false
Vue.use(VueRx)

new Vue({
  router: Router,
  store: Store,
  vuetify,
  render: h => h(App),

}).$mount('#app')