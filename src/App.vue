<template>
  <div id="app">
    <tutorial v-if="isTutorial"/>
    <transition name="fade" mode="out-in" v-else>
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Tutorial from './views/Tutorial.vue'
export default {
  components: {Tutorial},
  computed: {
    isTutorial () {
      return this.$store.getters['info/GET_TUTORIAL']
    }
  },
  methods: {
  
  }
}
</script>
<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: all .35s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: all .45s ease-in;
}

</style>
