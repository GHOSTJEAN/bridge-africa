import Vue from 'vue'
import App from './App.vue'

import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)


//plugins 
import './plugins/bridge-africa-assets';
 
import router from './router';

Vue.config.productionTip = false

new Vue({ 
  router,
  render: h => h(App) 
}).$mount('#app')
   