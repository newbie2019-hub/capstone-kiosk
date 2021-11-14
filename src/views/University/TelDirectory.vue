<template>
 <div>
  <h3 class="text-center text-white mt-5 pt-5">TELEPHONE DIRECTORY</h3>
  <p class="text-center mb-5 text-white">Scroll down to see more list</p>
  <div class="row justify-content-center">
     <div class="col-10 col-xl-5 col-lg-6">
          <div class="telephone mb-3" v-once v-for="(tel, i) in teldirectories" :key="i">
            <div class="d-flex flex-column ms-4 justify-content-center text-white">
              <p class="">{{tel.name}}</p>
              <p class=""><i class="fas fa-phone-alt"></i> {{tel.tel_num}}</p>
            </div>
          </div>
      </div>
      <p class="text-white text-center mt-4 mb-4">End of the telephone list</p>
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
  ...mapState('info', ['teldirectories'])
 }
}
</script>
<style lang="css">

.font-2x {
 font-size: 1.5rem;
}

.telephone {
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(87, 87, 87, 0.342) !important;
  cursor: pointer;
  padding: 1rem 1rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.3rem;
  transition: 0.5s;
  position: relative;
}

</style>