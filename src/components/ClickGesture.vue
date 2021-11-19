<template>
 <div>
  <div class="click-container">
   <div class="d-flex">
    <img src="@/assets/images/click-transparent.gif" alt="" class="img-fluid">
    <div class="d-flex align-items-center">
     <span class="click-text">Make peace gesture <br/> to emit click</span>
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
.click-container {
 position: fixed;
 bottom: 1rem;
 left: 1.5rem;
}

.click-container img{
 object-fit: cover;
 width: 110px;
 height: 90px;
}

.click-text {
 font-size: .9rem;
 color: white;
 text-transform: uppercase;
 letter-spacing: 1px;
 line-height: 1rem;
}
</style>