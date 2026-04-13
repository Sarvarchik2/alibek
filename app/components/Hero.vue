<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const title = ref(null)

onMounted(() => {
  gsap.from('.hero-content h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    stagger: 0.2
  })
  
  gsap.from('.hud-element', {
    scaleX: 0,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'expo.out',
    stagger: 0.1
  })
})
</script>

<template>
  <section class="hero">
    <div class="section-container hero-container">
      <div class="hero-content">
        <div class="mono label">{{ $t('hero.role') }}</div>
        <h1>
          {{ $t('hero.title_line1') }} <br> 
          <span class="outline">{{ $t('hero.title_line2') }}</span> <br> 
          {{ $t('hero.title_line3') }}
        </h1>
      </div>
      
      <div class="hero-stats">
        <div class="hud-element hud-border">
          <div class="hud-corner hud-corner-tl"></div>
          <div class="hud-corner hud-corner-tr"></div>
          <div class="hud-corner hud-corner-bl"></div>
          <div class="hud-corner hud-corner-br"></div>
          <span class="mono">{{ $t('hero.location') }}</span>
          <p>{{ $t('hero.city') }}</p>
        </div>
        
        <div class="hud-element hud-border">
          <div class="hud-corner hud-corner-tl"></div>
          <div class="hud-corner hud-corner-tr"></div>
          <div class="hud-corner hud-corner-bl"></div>
          <div class="hud-corner hud-corner-br"></div>
          <span class="mono">{{ $t('hero.experience') }}</span>
          <p>{{ $t('hero.stats') }}</p>
        </div>
        
        <div class="hud-button-container">
          <a href="#projects" class="hud-button">
            <span class="mono">{{ $t('hero.explore') }}</span>
            <div class="arrow">→</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content h1 {
  font-size: 6rem;
  line-height: 0.9;
  letter-spacing: -0.02em;
}

.outline {
  -webkit-text-stroke: 1px var(--text-primary);
  color: transparent;
}

.label {
  margin-bottom: 2rem;
  color: var(--accent-color);
}

.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hud-element p {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.hud-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: var(--text-primary);
  color: var(--bg-color);
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.hud-button:hover {
  transform: translateX(10px);
  background: var(--accent-color);
}

.hud-button .mono {
  color: var(--bg-color);
}

@media (max-width: 992px) {
  .hero {
    padding-top: 120px;
    padding-bottom: 50px;
  }
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-content h1 {
    font-size: clamp(2.5rem, 12vw, 4.5rem);
  }
  .hud-element {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 1.5rem 1rem;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
  .hud-element p {
    font-size: 1.1rem;
  }
}
</style>
