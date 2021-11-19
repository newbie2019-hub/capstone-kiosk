<template>
 <div class="arrows"></div>
</template>
<style>

.arrows {
  position: relative;
  bottom: 8%;
  left: 50%;
  width: 30px;
  height: 30px;
  transform: translateX(-50%);
}

.arrows:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 14.5px solid rgba(255, 255, 255, 0.7);
  border-bottom: 14.5px solid rgba(255, 255, 255, 0.7);
  transform: translate(26.6666666667px, 106.6666666667px) rotate(-45deg);
  animation: arrows 1.3s linear infinite;
}

@keyframes arrows {
  0% {
    border-left: 11px solid rgba(250, 250, 250, 0.377);
    border-bottom: 11px solid rgba(255, 255, 255, 0.377);
    transform: translate(-13.3333333333px, -20.3333333333px) rotate(-45deg);
  }
  10% {
    border-left: 11px solid rgba(255, 255, 255, 0.76);
    border-bottom: 11px solid rgba(252, 252, 252, 0.7);
  }
  50% {
    border-left: 11px solid rgba(255, 255, 255, 0.897);
    border-bottom: 11px solid rgba(250, 250, 250, 0.897);
    transform: translate(-13.3333333333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 11px solid rgba(255, 255, 255, 0.568);
    border-bottom: 11px solid rgba(255, 255, 255, 0.575);
    transform: translate(-13.3333333333px, 20.3333333333px) rotate(-45deg);
  }
}
</style>