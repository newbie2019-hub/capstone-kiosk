import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'

import University from '../views/University/University.vue'
import TelDirectory from '../views/University/TelDirectory.vue'

import Announcement from '../views/Announcement/Announcement.vue'

import Entertainment from '../views/Entertainment/Entertainment.vue'

import Hymn from '../views/Hymn.vue'
import Mission from '../views/Mission.vue'
import CoreValues from '../views/CoreValues.vue'
import Programs from '../views/Programs.vue'
import Vision from '../views/Vision.vue'
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
    path: '/corevalues',
    name: 'CoreValues',
    component: CoreValues
  },
  {
    path: '/university',
    name: 'University',
    component: University
  },
  {
    path: '/university/teldirectory',
    name: 'TelDirectory',
    component: TelDirectory
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: Announcement
  },
  {
    path: '/hymn',
    name: 'Hymn',
    component: Hymn
  },
  {
    path: '/mission',
    name: 'Mission',
    component: Mission
  },
  {
    path: '/vision',
    name: 'Vision',
    component: Vision
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
