<template>
  <section class="container" >
   <div class="row h-100">
      <h3 class="text-center text-white mt-3">SCHOOL OFFICIALS</h3>
      <p class="text-center mb-5 text-white">Scroll down to see more school official</p>
      <div class="row justify-content-center">
        <div class="col-10 col-xl-6 col-lg-7">
           <div class="official-card mb-3" v-for="(official, i) in schoolofficials" :key="i">
             <div class="d-flex">
              <img v-if="official.image == null" src="@/assets/images/logo.png" alt="" height="90" width="90">
              <img v-else :src="'http://127.0.0.1:8000/images/' + official.image" alt="" height="90" width="90">
              <div class="d-flex flex-column ms-4 justify-content-center text-white">
                <h4>{{official.title}} {{official.first_name}} {{official.last_name}}</h4>
                <h6 class="font-weight-400">Role: {{official.role}}</h6>
                <h6 class="font-weight-400">Email: {{official.email}}</h6>
              </div>
             </div>
            </div>
        </div>
      </div>
   </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('info', ['schoolofficials'])
 }
}
</script>

<style>
.official-card {
  padding: 1rem 1rem;
}

</style>