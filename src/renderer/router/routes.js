import Home from 'views/Home.vue'
import About from 'views/About.vue'
import Login from 'views/Login.vue'
import Main from 'views/Main.vue'

export default [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      keepAlive: true // keepAlive will allow the page to load only once
    }
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]
