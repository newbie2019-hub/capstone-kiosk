import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Feedback = () => import(/* webpackChunkName: "feedback" */'../views/Feedback.vue')
const MissionVision = () => import(/* webpackChunkName: "mivision" */'../views/Mission.vue')
const CoreValues = () => import(/* webpackChunkName: "corevalues" */'../views/CoreValues.vue')

const University = () => import(/* webpackChunkName: "university" */'../views/University/University.vue')
const TelDirectory = () => import(/* webpackChunkName: "teldirectory" */'../views/University/TelDirectory.vue')
const Menu = () => import(/* webpackChunkName: "menu" */'../views/MainMenu.vue')

const Announcement = () => import(/* webpackChunkName: "announcement" */'../views/Announcement/Announcement.vue')
const ImageAnnouncement = () => import(/* webpackChunkName: "imgannouncement" */'../views/Announcement/ImageAnnouncement.vue')

const Entertainment = () => import(/* webpackChunkName: "entertainment" */'../views/Entertainment/Entertainment.vue')
const Draw = () => import(/* webpackChunkName: "draw" */'../views/Entertainment/DrawingCanvas.vue')
const SquidGame = () => import(/* webpackChunkName: "squidgame" */'../views/Entertainment/SquidGame.vue')

const Hymn = () => import(/* webpackChunkName: "hymn" */'../views/Hymn.vue')
const Tutorial = () => import(/* webpackChunkName: "tutorial" */'../views/Tutorial.vue')

const Organization = () => import(/* webpackChunkName: "organization" */'../views/University/Organization.vue')
const QualityPolicy = () => import(/* webpackChunkName: "qualitypolicy" */'../views/University/QualityPolicy.vue')
const History = () => import(/* webpackChunkName: "history" */'../views/University/History.vue')
const FAQs = () => import(/* webpackChunkName: "faqs" */'../views/University/FAQs.vue')
const Departments = () => import(/* webpackChunkName: "departments" */'../views/University/Departments.vue')
const SchoolOfficials = () => import(/* webpackChunkName: "schoolofficials" */'../views/University/SchoolOfficials.vue')

const Programs = () => import(/* webpackChunkName: "programs" */'../views/Programs.vue')
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
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/university',
    name: 'University',
    component: University
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/university/teldirectory',
    name: 'TelDirectory',
    component: TelDirectory
  },
  {
    path: '/university/qualitypolicy',
    name: 'QualityPolicy',
    component: QualityPolicy
  },
  {
    path: '/university/history',
    name: 'History',
    component: History
  },
  {
    path: '/university/mission-vision',
    name: 'MissionVision',
    component: MissionVision
  },
  {
    path: '/university/corevalues',
    name: 'CoreValues',
    component: CoreValues
  },
  {
    path: '/university/faqs',
    name: 'FAQs',
    component: FAQs
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
    path: '/announcement/highlights',
    name: 'ImageAnnouncement',
    component: ImageAnnouncement
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
  {
    path: '/entertainment/draw',
    name: 'Draw',
    component: Draw
  },
  {
    path: '/entertainment/squidgame',
    name: 'SquidGame',
    component: SquidGame
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
