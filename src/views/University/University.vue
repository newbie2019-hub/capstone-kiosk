<template>
 <div>
   <section class="container mb-5">
     <div class="row justify-content-center">
       <h3 class="text-center text-white mt-3">UNIVERSITY</h3>
       <p class="text-center mb-5 text-white">Pinch your finger on any of the cards</p>
       <div class="col-md-6 col-lg-6">
         <router-link to="/university/departments" class="text-decoration-none">
          <div v-once class="card">
            <img v-once src="@/assets/images/departments.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>DEPARTMENTS</h5>
              <p>Learn more about the deparments of the university.</p>
            </div>
            <div class="card-border card-border-department"></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <router-link to="/university/organization" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/university-logo.png" alt="" loading=lazy>
              <div class="card-content">
                <h5>ORGANIZATIONS</h5>
                <p>Learn more about the organizations of the university.</p>
              </div>
            </div>
            <div class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <router-link to="/programs" class="text-decoration-none">
          <div v-once class="card">
              <img v-once src="@/assets/images/university-logo.png" alt="" loading=lazy>
              <div class="card-content">
                <h5>PROGRAMS</h5>
                <p>See what programs are offered by the university.</p>
              </div>
            <div class="card-border card-border-university "></div>
          </div>
         </router-link>
       </div>
     </div>
     <div class="row justify-content-center mt-2">
       <div class="col-md-6 col-lg-3">
        <router-link to="/university/teldirectory" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
               <img v-once src="@/assets/images/telephone.jpg" alt="" loading=lazy>
              <div class="card-content">
               <h5>TELEPHONE DIRECTORY</h5>
                <p>List of telephone numbers on the university.</p>
              </div>
            </div>
            <div class="card-border card-border-telephone "></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-3">
         <router-link to="/university/faqs" class="text-decoration-none">
          <div v-once class="card">
              <img v-once src="@/assets/images/faqs.jpg" alt="" loading=lazy>
              <div class="card-content">
                <h5>FAQs</h5>
                <p>Frequently Asked Questions about the University.</p>
              </div>
            <div class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div class="col-md-6 col-lg-6">
        <router-link to="/university/schoolofficials" class="text-decoration-none">
         <div v-once class="card">
           <div class="card-small">
            <img v-once src="@/assets/images/university.jpg" alt="" loading=lazy>
            <div class="card-content">
              <h5>SCHOOL OFFICIALS</h5>
              <p>Learn more about the school officials of the university.</p>
            </div>
           </div>
           <div class="card-border card-border-entertainment"></div>
         </div>
        </router-link>
       </div>
     </div>
   </section>
 </div>
</template>

<script>
export default {
  name: 'University',
  components: {
    
  },
  mounted() {
    document.title = 'Touchless Information Kiosk - Main Menu'
  }
}
</script>
