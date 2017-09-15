/**
 * Created by TianYa on 2017/9/13.
 */
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import './common/stylus/fonts.styl'

new Vue({
  el:'#app',
  render:h=>h(app),
  router
})
