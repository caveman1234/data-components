import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CompContainer from '@/components/CompContainer'
var a = "develop1";
var a = "develop1111----------------1";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path:"",
          name:"CompContainer",
          component:CompContainer
        }
      ]
    }
  ]
})
<<<<<<< HEAD
var b = "develop";
var b = "develop------2222";
var b = "develop------2222";
=======
var b = "develop222";
>>>>>>> 7947f68... 222
