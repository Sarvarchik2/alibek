<script setup>
const { locale, locales, setLocale } = useI18n()
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">
      <span class="mono">A. ABDUSAMADOV</span>
    </div>
    <div class="nav-links">
      <a href="#projects" class="mono hover-link">{{ $t('nav.projects') }}</a>
      <a href="#about" class="mono hover-link">{{ $t('nav.about') }}</a>
      <a href="#contact" class="mono hover-link">{{ $t('nav.contact') }}</a>
    </div>
    <div class="nav-right">
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
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(8, 8, 8, 0.8), transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
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
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-color);
  animation: pulse 2s infinite ease-in-out;
}

@media (max-width: 992px) {
  .nav-links, .lang-switcher {
    display: none;
  }
}
</style>
