<script setup>
import { ref } from 'vue'
const { locale, locales, setLocale } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const selectLang = (code) => {
  setLocale(code)
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <span class="mono">A. ABDUSAMADOV</span>
    </div>

    <!-- Desktop Nav -->
    <div class="nav-links desktop-only">
      <a href="#projects" class="mono hover-link">{{ $t('nav.projects') }}</a>
      <a href="#about" class="mono hover-link">{{ $t('nav.about') }}</a>
      <a href="#contact" class="mono hover-link">{{ $t('nav.contact') }}</a>
    </div>

    <div class="nav-right desktop-only">
      <div class="lang-switcher">
        <button 
          v-for="l in locales" 
          :key="l.code" 
          @click="setLocale(l.code)"
          :class="{ active: locale === l.code }"
          class="mono lang-btn"
        >
          {{ l.code }}
        </button>
      </div>
      <div class="nav-status">
        <div class="pulse-dot"></div>
        <span class="mono">{{ $t('nav.available') }}</span>
      </div>
    </div>

    <!-- Mobile Toggle -->
    <button class="menu-toggle mobile-only" @click="toggleMenu" :class="{ open: isMenuOpen }">
      <span></span>
      <span></span>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-links">
          <a href="#projects" class="massive-link" @click="toggleMenu">{{ $t('nav.projects') }}</a>
          <a href="#about" class="massive-link" @click="toggleMenu">{{ $t('nav.about') }}</a>
          <a href="#contact" class="massive-link" @click="toggleMenu">{{ $t('nav.contact') }}</a>
        </div>
        
        <div class="mobile-footer">
          <div class="lang-switcher-mobile">
            <button 
              v-for="l in locales" 
              :key="l.code" 
              @click="selectLang(l.code)"
              :class="{ active: locale === l.code }"
              class="mono lang-btn-large"
            >
              {{ l.name }}
            </button>
          </div>
          <div class="nav-status">
            <div class="pulse-dot"></div>
            <span class="mono">{{ $t('nav.available') }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 10000;
  background-color: #080808; /* Solid background */
  border-bottom: 1px solid var(--border-color);
}

.desktop-only { display: flex; }
.mobile-only { display: none; }

.nav-links {
  display: flex;
  gap: 3rem; /* More space */
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.lang-switcher {
  display: flex;
  gap: 0.5rem;
  border-right: 1px solid var(--border-color);
  padding-right: 2rem;
}

.lang-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.2rem 0.5rem;
}

.lang-btn:hover, .lang-btn.active {
  color: var(--accent-color);
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pulse-dot {
  width: 100%;
  max-width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-color);
  animation: pulse 2s infinite ease-in-out;
}

/* Mobile Menu Styles */
.menu-toggle {
  background: none;
  border: none;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 20000;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  position: absolute;
  transition: all 0.3s ease;
}

.menu-toggle span:first-child { top: 0; }
.menu-toggle span:last-child { bottom: 0; }

.menu-toggle.open span:first-child {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.open span:last-child {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0 !important;
  background-color: #080808 !important; /* Force solid color */
  z-index: 15000 !important;
  padding: 8rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1 !important;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.massive-link {
  font-size: 3rem;
  font-family: var(--font-heading);
  text-decoration: none;
  color: var(--text-primary);
}

.mobile-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.lang-switcher-mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.lang-btn-large {
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.lang-btn-large.active {
  background: var(--text-primary);
  color: var(--bg-color);
  border-color: var(--text-primary);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0 !important;
}

@media (max-width: 992px) {
  .desktop-only { display: none; }
  .mobile-only { display: block; }
  .navbar {
    padding: 1rem 1.5rem;
  }
}
</style>
