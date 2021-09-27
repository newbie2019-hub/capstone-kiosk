<template>
 <div>
  <h3 class="text-center text-white">TELEPHONE DIRECTORIES</h3>
  <div class="text-center col text-white mb-5">
   <div v-once v-for="(tel, i) in teldirectories" :key="i" class="mt-4">
    <p class="font-2x">{{tel.name}}</p>
    <p class="font-2x">{{tel.tel_num}}</p>
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
</style>