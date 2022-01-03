<template functional>
 <div>
  <div class="return-container">
   <div class="d-flex">
    <img src="@/assets/images/return-transparent.gif" alt="" class="img-fluid">
    <div class="d-flex align-items-center">
     <span class="return-text">Return to <br/> previous route</span>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 
}
</script>
<style>
.return-container {
 position: fixed;
 bottom: 1rem;
 left: 1.5rem;
}

.return-container img{
 object-fit: cover;
 width: 110px;
 height: 90px;
}

.return-text {
 font-size: .9rem;
 color: white;
 text-transform: uppercase;
 letter-spacing: 1px;
 line-height: 1rem;
}
</style>