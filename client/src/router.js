import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/register.vue'
import Login from './components/login.vue'
import Songs from './components/songsComponent/songs.vue'
import ViewSong from './components/songsComponent/viewSong.vue'
import CreateSong from './components/songsComponent/createSong.vue'
import EditSong from './components/songsComponent/editSong.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'songs'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/:id',
      name: 'viewSong',
      component: ViewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'editSong',
      component: EditSong
    },
    {
      path: '/songs/create',
      name: 'createSong',
      component: CreateSong
    },
  ]
})
