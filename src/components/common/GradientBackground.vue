<template>
  <div class="gradient-background" :class="{ 'with-clouds': withClouds }">
    <div v-if="withClouds" class="clouds-container">
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
      <div class="thought-cloud"></div>
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  withClouds: {
    type: Boolean,
    default: true
  }
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/functions" as *;

.gradient-background {
  position: relative;
  background: linear-gradient(150deg, $primary 60%, $tertiary 100%);
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  
  .content-wrapper {
    position: relative;
    z-index: 2;
    width: 100%;
    flex: 1;
    padding: 0;
  }
  
  &.with-clouds {
    .clouds-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
    }
    
    .cloud {
      position: absolute;
      background-color: rgba($light, 0.15);
      border-radius: 50px;
      opacity: 0.7;
      z-index: 1;
      
      &::before, &::after {
        content: '';
        position: absolute;
        background-color: rgba($light, 0.15);
        border-radius: 50%;
      }
      
      &-1 {
        width: 180px;
        height: 60px;
        top: 5%;
        left: 15%;
        animation: float-cloud 30s linear infinite;
        
        &::before {
          width: 70px;
          height: 70px;
          top: -30px;
          left: 20px;
        }
        
        &::after {
          width: 60px;
          height: 60px;
          top: -20px;
          right: 20px;
        }
      }
      
      &-2 {
        width: 140px;
        height: 50px;
        top: 10%;
        right: 10%;
        animation: float-cloud 20s linear infinite reverse;
        
        &::before {
          width: 60px;
          height: 60px;
          top: -25px;
          left: 15px;
        }
        
        &::after {
          width: 50px;
          height: 50px;
          top: -15px;
          right: 15px;
        }
      }
      
      &-3 {
        width: 160px;
        height: 55px;
        bottom: 25%;
        left: 25%;
        animation: float-cloud 25s linear infinite;
        
        &::before {
          width: 65px;
          height: 65px;
          top: -27px;
          left: 17px;
        }
        
        &::after {
          width: 55px;
          height: 55px;
          top: -18px;
          right: 17px;
        }
      }
    }
    
    .thought-cloud {
      position: absolute;
      width: 120px;
      height: 80px;
      background-color: rgba($light, 0.18);
      border-radius: 100px 100px 100px 30px;
      bottom: 15%;
      right: 20%;
      transform: rotate(-5deg);
      animation: float-thought 18s ease-in-out infinite;
      
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: rgba($light, 0.18);
        border-radius: 50%;
        bottom: -15px;
        right: 20px;
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: rgba($light, 0.18);
        border-radius: 50%;
        bottom: -25px;
        right: 5px;
      }
    }
  }
}

@keyframes float-cloud {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
}

@keyframes float-thought {
  0% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-15px) rotate(0deg);
  }
  100% {
    transform: translateY(0) rotate(-5deg);
  }
}
</style> 