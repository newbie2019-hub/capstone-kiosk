<template>
 <div class="">
  <div class="post-selected" v-if="viewPost" @click.prevent="viewPost = false">
   <div class="row justify-content-center">
    <div class="col-8 col-lg-7">
     <div class="d-flex align-items-center">
      <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy" />
      <div class="d-flex flex-column ms-4 lh-0 mx-auto text-white" style="line-height: 1.2rem">
       <h4>{{ selectedPost.useraccount.userinfo.first_name }} {{ selectedPost.useraccount.userinfo.last_name }}</h4>
       <h6 v-if="selectedPost.useraccount.userinfo.organization">
        {{
         selectedPost.useraccount.userinfo.organization.abbreviation
          ? selectedPost.useraccount.userinfo.organization.abbreviation
          : selectedPost.useraccount.userinfo.organization.name
        }}
        - {{ selectedPost.useraccount.userinfo.role.role }}
       </h6>
       <h6 v-else-if="selectedPost.useraccount.userinfo.department">
        {{
         selectedPost.useraccount.userinfo.department.abbreviation
          ? selectedPost.useraccount.userinfo.department.abbreviation
          : selectedPost.useraccount.userinfo.department.name
        }}
        - {{ selectedPost.useraccount.userinfo.role.role }}
       </h6>
       <h6 v-else>OSA</h6>
      </div>
      <div class="me-4">
       <p class="mb-4 text-white">{{ formatDate(selectedPost.created_at) }}</p>
      </div>
     </div>
     <div class="text-white mt-5 announcement-text" v-html="selectedPost.postcontent.content"></div>
    </div>
   </div>
   <p class="close-text">Click anywhere to close</p>
  </div>
  <div class="container vh-100">
   <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div>
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">Announcements</h1>
     <h5 class="fw-light">To see more options, Pinch and Drag to scroll either left or right</h5>
     <h5 class="fw-light mt-5 mb-3">Select an announcement to view its content.</h5>
     <h5 v-if="posts.length == 0" class="mt-5 fw-light">It appears that there are no available announcements at the moment. Please try again later</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horizontalpost" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div
        @click.prevent="setViewPost(post)"
        id="introcard"
        class="item item-post"
        v-for="(post, i) in posts"
        :key="i"
       >
        <img
         v-if="post.postcontent.image"
         :src="`https://be.lnukiosk.live/uploads/${post.postcontent.image}`"
         class="card-img"
         alt="..."
        />
        <img v-else src="@/assets/images/lnubldg1.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay text-wrap p-4">
         <h5 class="card-title">{{ post.postcontent.title }}</h5>
         <p class="card-text fw-light mt-3 ql-align-justify">{{ post.postcontent.post_excerpt }}</p>
        </div>
        <div class="added-by">
         <p>{{ post.useraccount.userinfo.first_name }} {{ post.useraccount.userinfo.last_name }}</p>
         <p>{{ post.useraccount.userinfo.role.role }}</p>
        </div>
       </div>
      </div>
     </main>
    </div>
   </div>
  </div>
  <return-gesture />
 </div>
</template>
<script>
 import { mapState } from 'vuex';
 import ReturnGesture from '../../components/ReturnGesture.vue';
 export default {
  components: { ReturnGesture },
  data() {
   return {
    selectedPost: {
     postcontent: {
      content: '',
     },
     useraccount: {
      userinfo: {
       organization: {
        abbreviation: '',
        name: '',
       },
       department: {
        abbreviation: '',
        name: '',
       },
      },
     },
    },
    viewPost: false,
   };
  },
  computed: {
   ...mapState('info', ['posts']),
  },
  mounted() {
   document.title = 'Post Section - Touchless Information Kiosk';
  },
  methods: {
   formatDate(date) {
    //  return date
    const d = new Date(date);
    return (
     ('0' + d.getDate()).slice(-2) +
     '-' +
     ('0' + (d.getMonth() + 1)).slice(-2) +
     '-' +
     d.getFullYear() +
     ' ' +
     ('0' + d.getHours()).slice(-2) +
     ':' +
     ('0' + d.getMinutes()).slice(-2)
    );
   },
   currentNumber(i) {
    return i + 1 < 10 ? `0${i + 1}` : i + 1;
   },
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontalpost.offsetLeft;
    this.scrollLeft = this.$refs.horizontalpost.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontalpost.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontalpost.scrollLeft = this.scrollLeft - walk;
   },
   setViewPost(data) {
    this.selectedPost = data;
    this.viewPost = true;
   },
  },
 };
</script>
<style>
 .announcement-text {
  font-size: 1.5rem;
 }

 .close-text {
  position: fixed;
  bottom: 2rem;
  left: 3rem;
  font-size: 0.9rem;
  color: rgb(190, 190, 190);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
 }

 .post-selected {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.836);
  padding-top: 7rem;
  overflow: auto;
  padding-bottom: 6rem;
 }

 .added-by {
  position: absolute;
  bottom: 1rem;
  color: rgb(223, 223, 223);
  font-weight: 400;
  left: 1.5rem;
  font-size: 0.9rem;
 }

 .ql-align-justify {
  text-align: justify;
  text-justify: inter-word;
 }
</style>
