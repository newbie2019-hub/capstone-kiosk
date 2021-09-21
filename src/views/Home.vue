<template>
 <div>
   <section class="container mb-5">
     <div class="row justify-content-center">
       <div class="col-md-6 col-lg-6">
         <div class="card">
           <img src="@/assets/images/university.jpg" alt="" loading=lazy>
           <div class="card-content">
             <h5>University</h5>
             <p>A leading university of education and diverse disciplines attuned to local and global development needs</p>
           </div>
           <div class="card-border card-border-university"></div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <router-link to="/feedback" class="text-decoration-none">
          <div class="card">
            <div class="card-small">
              <img src="@/assets/images/feedback.jpg" alt="" loading=lazy>
              <div class="card-content">
                <h5>Feedback</h5>
                <p>To help us improve our system please leave a some review.</p>
              </div>
            </div>
            <div class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="card">
            <img src="@/assets/images/university.jpg" alt="" loading=lazy>
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
         <div class="card">
           <div class="card-small">
            <img src="@/assets/images/announcement.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>Announcement</h5>
              <p>Stay updated with the University’s current events, announcements and news.</p>
            </div>
           </div>
           <div class="card-border card-border-announcement"></div>
         </div>
       </div>
       <div class="col-md-6 col-lg-6">
         <div class="card">
           <div class="card-small">
            <img src="@/assets/images/entertainment.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>Entertainment</h5>
              <p>Have some fun and learn other possibilities with touchless technology.</p>
            </div>
           </div>
           <div class="card-border card-border-entertainment"></div>
         </div>
       </div>
     </div>
   </section>

   <section class="container mb-5 pt-5">
     <div class="row justify-content-center text-white">
       <h4 class="text-uppercase">Announcements</h4>
       <hr class="mt-2"/>
     </div>
     <div class="row justify-content-center text-white">
       <div class="col-lg-8 col-xl-8 mt-3">
          <h5 class="mb-4 text-sub">Latest Annoucements</h5>
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img src="@/assets/images/announcement.jpg" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
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
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img src="@/assets/images/announcement.jpg" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
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
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img src="@/assets/images/announcement.jpg" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
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
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img src="@/assets/images/announcement.jpg" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Developmental Integrated Group of Information Students (DIGITS)</p>
             </div>
           </div>
         </div>
         <div class="card-announcement mt-2">
           <div class="d-flex align-items-center">
             <img src="@/assets/images/announcement.jpg" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
             <div class="d-flex flex-column ms-4 lh-0 mx-auto" style="line-height: 1.2rem">
              <p>Developmental Integrated Group of Information Students (DIGITS)</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>

   <section class="container mb-5 pt-5">
     <div class="row justify-content-center text-white">
       <h4 class="text-uppercase">Frequently Asked Questions (FAQs)</h4>
       <hr class="mt-2"/>
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
