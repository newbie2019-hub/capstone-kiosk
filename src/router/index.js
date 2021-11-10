import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Feedback = () => import('../views/Feedback.vue')

const University = () => import('../views/University/University.vue')
const TelDirectory = () => import('../views/University/TelDirectory.vue')

const Announcement = () => import('../views/Announcement/Announcement.vue')

const Entertainment = () => import('../views/Entertainment/Entertainment.vue')

const Hymn = () => import('../views/Hymn.vue')

const Organization = () => import('../views/University/Organization.vue')
const Departments = () => import('../views/University/Departments.vue')
const SchoolOfficials = () => import('../views/University/SchoolOfficials.vue')

const Programs = () => import('../views/Programs.vue')
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
    path: '/university/organization',
    name: 'organization',
    component: Organization
  },
  {
    path: '/university/departments',
    name: 'departments',
    component: Departments
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
