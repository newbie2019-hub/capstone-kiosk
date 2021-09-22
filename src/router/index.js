import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'
import University from '../views/University/University.vue'
import Announcement from '../views/Announcement/Announcement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: About
  }, 
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/university',
    name: 'University',
    component: University
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: Announcement
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
