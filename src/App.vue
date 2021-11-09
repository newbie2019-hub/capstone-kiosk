<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    
  }
}
</script>
<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: all .25s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in;
}
/* 
.title {
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 4rem;
  color: white;
} */
</style>
