<template>
 <div>
   <div class="container mb-5">
     <div class="row justify-content-center">
       <div class="col-md-6 col-lg-6">
         <div class="card border-0">
           <img src="@/assets/images/university.jpg" alt="">
           <div class="card-content">
             <h5>University</h5>
             <p>A leading university of education and diverse disciplines attuned to local and global development needs</p>
           </div>
           <div class="card-border card-border-university"></div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="card border-0">
           <div class="card-small">
            <img src="@/assets/images/feedback.jpg" alt="">
            <div class="card-content">
              <h5>Feedback</h5>
              <p>To help us improve our system please leave a some review.</p>
            </div>
           </div>
           <div class="card-border card-border-feedback "></div>
         </div>
       </div>
       <div class="col-md-6 col-lg-3">
         <div class="card border-0">
            <img src="@/assets/images/university.jpg" alt="">
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
         <div class="card border-0">
           <div class="card-small">
            <img src="@/assets/images/announcement.jpg" alt="">
            <div class="card-content">
              <h5>Announcement</h5>
              <p>Stay updated with the University’s current events, announcements and news.</p>
            </div>
           </div>
           <div class="card-border card-border-announcement"></div>
         </div>
       </div>
       <div class="col-md-6 col-lg-6">
         <div class="card border-0">
           <div class="card-small">
            <img src="@/assets/images/entertainment.jpg" alt="">
            <div class="card-content">
              <h5>Entertainment</h5>
              <p>Have some fun and learn other possibilities with touchless technology.</p>
            </div>
           </div>
           <div class="card-border card-border-entertainment"></div>
         </div>
       </div>
     </div>
   </div>
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
