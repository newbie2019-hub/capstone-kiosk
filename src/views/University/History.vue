<template>
 <div>
  <div class="container">
   <h1 class="text-center text-white mt-5 pt-5 fw-bold text-uppercase">Brief History</h1>
   <div class="text-white font-history mt-5 pt-4 pb-3 ps-5 pe-5 mb-5">
    <pre class="font-poppins text-wrap">{{missionvision[0].lnu_history}}</pre>
   </div>
  </div>
  <return-gesture />
 </div>
</template>
<script>
import {mapState} from 'vuex'
import ReturnGesture from '../../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
 computed: {
  ...mapState('info', ['missionvision'])
 }
}
</script>
<style>
.font-history {
 font-size: 2.4rem;
 line-height: 3.2rem;
 text-align: justify;
 text-justify: inter-word;
}

.font-poppins {
 font-family: 'Poppins', sans-serif !important;

}
</style>