<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  async mounted() {
    document.title = 'Touchless Information Kiosk - Leyte Normal University'
    await this.$store.dispatch('info/getMissionVision')
    await this.$store.dispatch('info/getCoreValues')
    await this.$store.dispatch('info/getOrganizations')
    await this.$store.dispatch('info/getSchoolOfficials')
    await this.$store.dispatch('info/getDepartments')
    await this.$store.dispatch('info/getTelDirectories')
    await this.$store.dispatch('info/getCourses')
    await this.$store.dispatch('info/getFAQs')
    await this.$store.dispatch('info/getPosts')
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
