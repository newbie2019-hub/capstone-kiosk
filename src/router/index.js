import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Feedback = () => import('../views/Feedback.vue')

const University = () => import('../views/University/University.vue')
const TelDirectory = () => import('../views/University/TelDirectory.vue')

const Announcement = () => import('../views/Announcement/Announcement.vue')

const Entertainment = () => import('../views/Entertainment/Entertainment.vue')

const Hymn = () => import('../views/Hymn.vue')
const Mission = () => import('../views/Mission.vue')

const FAQS = () => import('../views/University/FAQs.vue')
const Organization = () => import('../views/University/Organization.vue')
const SchoolOfficials = () => import('../views/University/SchoolOfficials.vue')

const CoreValues = () => import('../views/CoreValues.vue')
const Programs = () => import('../views/Programs.vue')
const Vision = () => import('../views/Vision.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/university/faqs',
    name: 'faqs',
    component: FAQS
  },
  {
    path: '/university/organization',
    name: 'organization',
    component: Organization
  },
  {
    path: '/university/schoolofficials',
    name: 'schoolofficials',
    component: SchoolOfficials
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
