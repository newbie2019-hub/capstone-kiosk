<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/tutorial">Tutorial</router-link>
      <router-link to="/mission">Mission</router-link>
      <router-link to="/vision">Vision</router-link>
      <router-link to="/hymn">Hymn</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease-in;
}
</style>
