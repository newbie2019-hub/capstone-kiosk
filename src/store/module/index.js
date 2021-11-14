import API from '../base/'

export default {
  namespaced: true,
  state: {
   missionvision: [{
     lnu_mission: '',
     lnu_vision: ''
   }],
   core_values: [],
   departments: [],
   organizations: [],
   schoolofficials: [],
   teldirectories: [],
   colleges: [],
   faqs: [],
   posts: [],
   isTutorial: false,
  },
  getters: {
    GET_TUTORIAL(state){
      return state.isTutorial
    }
  },
  mutations: {
   SET_TUTORIAL_STATE(state, data){
    state.isTutorial = data
   },
   SET_COURSES(state, data){
    state.colleges = data
   },
   SET_FAQS(state, data){
    state.faqs = data
   },
   SET_POSTS(state, data){
    state.posts = data
   },
   SET_TEL_DIRECTORIES(state, data){
    state.teldirectories = data
   },
   SET_MISSION_VISION(state, data){
    state.missionvision = data
   },
   SET_CORE_VALUES(state, data){
    state.core_values = data
   },
   SET_DEPARTMENTS(state, data){
    state.departments = data
   },
   SET_ORGANIZATIONS(state, data){
    state.organizations = data
   },
   SET_SCHOOL_OFFICIALS(state, data){
    state.schoolofficials = data
   },
  
  },
  actions: {
    async getPosts({commit}){
      const res = await API.get(`/posts`).then(res => {
        commit('SET_POSTS', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getFAQs({commit}){
      const res = await API.get(`/faqs`).then(res => {
        commit('SET_FAQS', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getTelDirectories({commit}){
      const res = await API.get(`/teldirectories`).then(res => {
        commit('SET_TEL_DIRECTORIES', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getMissionVision({commit}){
      const res = await API.get(`/missionvision`).then(res => {
        commit('SET_MISSION_VISION', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getCoreValues({commit}){
      const res = await API.get(`/corevalues`).then(res => {
        commit('SET_CORE_VALUES', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getDepartments({commit}){
      const res = await API.get(`/departments`).then(res => {
        commit('SET_DEPARTMENTS', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getOrganizations({commit}){
      const res = await API.get(`/organizations`).then(res => {
        commit('SET_ORGANIZATIONS', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getSchoolOfficials({commit}){
      const res = await API.get(`/schoolofficials`).then(res => {
        commit('SET_SCHOOL_OFFICIALS', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async getCourses({commit}){
      const res = await API.get(`/courses`).then(res => {
        commit('SET_COURSES', res.data)
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    },
    async sendReview({commit}, data){
      const res = await API.post('/review', data).then(res => {
        return res;
      }).catch(err => {
       return err.response;
      })

      return res;
    }
  }
}