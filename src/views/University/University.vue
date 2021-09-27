<template>
 <div>
   <section class="container mb-5">
     <div class="row justify-content-center">
       <div class="col-md-6 col-lg-6">
         <router-link to="/university" class="text-decoration-none">
          <div v-once class="card">
            <img v-once src="@/assets/images/university.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>DEPARTMENTS</h5>
              <p>Learn more about the deparments of the university and get updated.</p>
            </div>
            <div class="card-border card-border-university"></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <router-link to="/feedback" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/feedback.jpg" alt="" loading=lazy>
              <div class="card-content">
                <h5>ORGANIZATIONS</h5>
                <p>Learn more about the organizations of the university and get updated.</p>
              </div>
            </div>
            <div class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <div v-once class="card">
            <img v-once src="@/assets/images/university.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>PROGRAMS</h5>
              <p>See what programs are offered by the university.</p>
            </div>
           <div class="card-border card-border-university "></div>
         </div>
       </div>
     </div>
     <div class="row justify-content-center mt-2">
       <div class="col-md-6 col-lg-6">
         <router-link to="/university/teldirectory" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/announcement.jpg" alt="" loading=lazy>
              <div class="card-content">
                <h5>TELEPHONE DIRECTORY</h5>
                <p>List of telephone numbers on the university.</p>
              </div>
            </div>
            <div class="card-border card-border-announcement"></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-6">
         <div v-once class="card">
           <div class="card-small">
            <img v-once src="@/assets/images/entertainment.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>SCHOOL OFFICIALS</h5>
              <p>Learn more about the school officials of the university.</p>
            </div>
           </div>
           <div class="card-border card-border-entertainment"></div>
         </div>
       </div>
     </div>
   </section>
 </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  mounted() {
    document.title = 'Touchless Information Kiosk - Main Menu'
  }
}
</script>
