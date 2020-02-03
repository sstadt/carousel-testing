import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    hd: Infinity,
  },
})

require('swiper/dist/css/swiper.min.css')

new Vue({
  render: h => h(App)
}).$mount('#app')
