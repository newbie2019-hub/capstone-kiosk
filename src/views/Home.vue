<template>
 <div>
   <section v-once class="container mb-5 pt-5">
    <h2 class="text-white mt-5">MAIN MENU</h2>
    <p class="text-muted">Show both of your hands to scroll</p>
    <hr v-once class="mb-5 mt-2 bg-white zindex-999"/>
     <div v-once class="row justify-content-center">
       <div class="col-md-6 col-lg-6">
         <router-link v-once to="/university" class="text-decoration-none">
          <div v-once class="card">
            <img v-once src="@/assets/images/university.jpg" alt="">
            <div class="card-content">
              <h5 v-once>University</h5>
              <p v-once>A leading university of education and diverse disciplines attuned to local and global development needs</p>
            </div>
            <div v-once class="card-border card-border-university"></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-3">
         <router-link v-once to="/feedback" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/feedback.jpg" alt="">
              <div v-once class="card-content">
                <h5 v-once>Feedback</h5>
                <p v-once>To help us improve our system please leave a some review.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-3">
         <router-link v-once to="/programs" class="text-decoration-none">
          <div v-once class="card">
              <img v-once src="@/assets/images/university-logo.png" alt="">
              <div v-once class="card-content">
                <h5 v-once>COLLEGES</h5>
                <p v-once>See what programs are offered by the university.</p>
              </div>
            <div v-once class="card-border card-border-university "></div>
          </div>
         </router-link>
       </div>
     </div>
     <div v-once class="row justify-content-center mt-2">
       <div v-once class="col-md-6 col-lg-6">
         <router-link v-once to="/announcement" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/announcement.jpg" alt="">
              <div v-once class="card-content">
                <h5 v-once>Announcement</h5>
                <p v-once>Stay updated with the University’s current events, announcements and news.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-announcement"></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-6">
         <router-link v-once to="/entertainment" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/entertainment.jpg" alt="">
              <div v-once class="card-content">
                <h5 v-once>Entertainment</h5>
                <p v-once>Have some fun and learn other possibilities with touchless technology.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-entertainment"></div>
          </div>
         </router-link>
       </div>
     </div>
   </section>

   <section v-once class="container mb-2 pt-5">
     <!-- <div v-once class="row justify-content-center text-white">
       <h4 v-once class="text-uppercase">QUICK LINKS</h4>
     </div> -->
     <!-- <nav>
      <router-link to="/corevalues">Core Values</router-link>
      <router-link to="/mission">Mission &amp; Vision</router-link>
      <router-link to="/hymn">Hymn</router-link>
    </nav> -->
    <core-value/>
   </section>

   <section v-once class="container mb-5 pt-5">
     <div v-once class="row justify-content-center text-white">
       <h4 v-once class="text-uppercase">Announcements</h4>
       <hr v-once class="mt-2"/>
     </div>
     <div v-once class="row justify-content-center text-white">
       <div class="col-lg-8 col-xl-8 mt-3">
          <h5 class="mb-4 text-sub">Latest Annoucements</h5>
         <div v-once class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Genreve Fernandez</p>
              <p>DIGITS, President</p>
             </div>
             <div class="me-4">
              <p class="mb-4">September 23, 2021</p>
             </div>
           </div>
           <div class="d-flex flex-column ms-5 mt-3 ps-5 pe-4">
             <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card. </p>
             <p class="mt-4 text-sub">Views: 300</p>
           </div>
         </div>
         <div v-once class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Genreve Fernandez</p>
              <p>DIGITS, President</p>
             </div>
             <div class="me-4">
              <p class="mb-4">September 23, 2021</p>
             </div>
           </div>
           <div class="d-flex flex-column ms-5 mt-3 ps-5 pe-4">
             <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card. </p>
             <p class="mt-4 text-sub">Views: 300</p>
           </div>
         </div>
         <div v-once class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Genreve Fernandez</p>
              <p>DIGITS, President</p>
             </div>
             <div class="me-4">
              <p class="mb-4">September 23, 2021</p>
             </div>
           </div>
           <div class="d-flex flex-column ms-5 mt-3 ps-5 pe-4">
             <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card. </p>
             <p class="mt-4 text-sub">Views: 300</p>
           </div>
         </div>
         <div class="d-grid mt-3">
           <button class="btn btn-primary">SHOW ALL</button>
         </div>
       </div>
       <div class="col-lg-4 col-xl-4 mt-3">
         <h5 class="mb-4 text-sub">Organizations</h5>
         <div v-once class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Developmental Integrated Group of Information Students (DIGITS)</p>
             </div>
           </div>
         </div>
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Developmental Integrated Group of Information Students (DIGITS)</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>

 </div>
</template>
<script>
import CoreValue from './CoreValues.vue'
export default {
  name: 'Home',
  mounted() {
    document.title = 'Touchless Information Kiosk - Main Menu'
  },
  components: {CoreValue}
}
</script>
