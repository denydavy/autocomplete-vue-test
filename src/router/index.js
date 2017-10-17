import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import AutoComplete from '@/components/AutoComplete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/autocomplete',
      name: 'AutoComplete',
      component: AutoComplete
    }
  ]
})
