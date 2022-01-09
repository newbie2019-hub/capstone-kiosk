<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  async created() {
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
    await this.$store.dispatch('info/getImagePosts')
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
