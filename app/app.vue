<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const loading = ref(true)

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
  
  // Preloader animation
  const tl = gsap.timeline()
  tl.to('.preloader-text', {
    opacity: 1,
    duration: 1,
    y: 0
  })
  tl.to('.preloader', {
    yPercent: -100,
    duration: 1,
    ease: 'expo.inOut',
    delay: 0.5,
    onComplete: () => {
      loading.value = false
    }
  })

  // Custom cursor logic
  const cursor = document.querySelector('.cursor-dot')
  const follower = document.querySelector('.cursor-follower')
  
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 })
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 })
  })
})
</script>

<template>
  <div class="app-wrapper">
    <div v-if="loading" class="preloader">
      <div class="preloader-text mono">{{ $t('preloader') }}</div>
    </div>

    <div class="grain-overlay"></div>
    
    <!-- Custom Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-follower"></div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import '~/assets/css/main.css';

.preloader {
  position: fixed;
  inset: 0;
  background: var(--bg-color);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-text {
  opacity: 0;
  transform: translateY(20px);
  font-size: 1.5rem;
  color: var(--accent-color);
}

.cursor-dot {
  position: fixed;
  width: 6px;
  height: 6px;
  background-color: var(--accent-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
}

.cursor-follower {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
}

.app-wrapper {
  position: relative;
  min-height: 100vh;
}
@media (hover: none) and (pointer: coarse) {
  .cursor-dot, .cursor-follower {
    display: none;
  }
}

@media (max-width: 992px) {
  * {
    cursor: auto !important;
  }
}
</style>
