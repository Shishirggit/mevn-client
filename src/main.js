// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
sync(store, router)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
