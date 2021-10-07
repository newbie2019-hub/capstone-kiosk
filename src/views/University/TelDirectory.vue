<template>
 <div>
  <h3 class="text-center text-white">TELEPHONE DIRECTORY</h3>
  <p class="text-center mb-5 text-white">Scroll down to see more list of telephone numbers</p>
  <div class="row justify-content-center">
    <div class="col-5 mb-5">
      <div class="telephone mt-2" v-once v-for="(tel, i) in teldirectories" :key="i">
        <p class="">{{tel.name}}</p>
        <p class="">{{tel.tel_num}}</p>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
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
  background-color: rgba(53, 53, 53, 0.925); 
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(87, 87, 87, 0.342) !important;
  cursor: pointer;
  padding: 20px 50px 20px 80px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.2rem;
  transition: 0.5s;
  position: relative;
}

.telephone::after {
  content: '\260E';
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  margin-left: 2rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>