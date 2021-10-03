<template>
  <div id="app">
    <!-- <div class="title">
      <h5>TOUCH-LESS INFO KIOSK</h5>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/corevalues">Core Values</router-link>
      <router-link to="/mission">Mission</router-link>
      <router-link to="/vision">Vision</router-link>
      <router-link to="/hymn">Hymn</router-link>
    </nav> -->
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
  transition: all .3s ease-out;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in;
}

.title {
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 4rem;
  color: white;
}
</style>
