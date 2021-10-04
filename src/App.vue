<template>
  <div id="app">
    <div class="pt-5">
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: all .25s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-in;
}

.title {
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 4rem;
  color: white;
}
</style>
