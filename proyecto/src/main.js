import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueAlertify from 'vue-alertify'

Vue.use(VueAlertify,{
  glossary: {
    title: '',
    // ok button text
    ok: 'SÍ',
    // cancel button text
    cancel: 'CANCELAR',
  }, 
  theme: {
    // class name attached to prompt dialog input textbox.
    input: 'ajs-input',
    // class name attached to ok button
    ok: 'ajs-ok',
    // class name attached to cancel button
    cancel: 'ajs-cancel',
  },
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
