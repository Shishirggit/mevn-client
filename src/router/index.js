import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import EditSong from '@/components/EditSong'
import StockPrice from '@/components/StockPrice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/createsong',
      name: 'CreateSong',
      component: CreateSong
    },
    {
      path: '/viewsong',
      name: 'ViewSong',
      component: ViewSong
    },
    {
      path: '/editsong',
      name: 'EditSong',
      component: EditSong
    },
    {
      path: '/stock',
      name: 'StockPrice',
      component: StockPrice
    }
  ]
})
