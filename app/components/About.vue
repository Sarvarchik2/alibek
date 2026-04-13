<template>
  <section id="about" class="about">
    <div class="section-container">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="mono label">{{ $t('about.label') }}</h2>
          <p class="large-text">
            {{ $t('about.text', { name: 'ALIBEK' }) }}
          </p>
          <div class="skills">
            <h3 class="mono">{{ $t('about.stack') }}</h3>
            <div class="skill-tags">
              <span class="skill-tag">FIGMA</span>
              <span class="skill-tag">FRAMER</span>
              <span class="skill-tag">NUXT.JS</span>
              <span class="skill-tag">GSAP</span>
              <span class="skill-tag">MOTION DESIGN</span>
              <span class="skill-tag">WEBFLOW</span>
            </div>
          </div>
        </div>
        
        <div class="about-visual">
          <div class="hud-border hud-large">
            <div class="hud-corner hud-corner-tl"></div>
            <div class="hud-corner hud-corner-tr"></div>
            <div class="hud-corner hud-corner-bl"></div>
            <div class="hud-corner hud-corner-br"></div>
            <div class="status-feed">
              <div class="feed-item">
                <span class="mono">{{ $t('about.status') }}</span>
                <p>{{ $t('about.status_val') }}</p>
              </div>
              <div class="feed-item">
                <span class="mono">{{ $t('about.timezone') }}</span>
                <p>{{ $t('about.timezone_val') }}</p>
              </div>
              <div class="feed-item">
                <span class="mono">{{ $t('about.focus') }}</span>
                <p>{{ $t('about.focus_val') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 150px 0;
  background: #0c0c0c;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 6rem;
}

.large-text {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.highlight {
  color: var(--accent-color);
}

.skills h3 {
  margin-bottom: 1.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}

.hud-large {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.status-feed {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 992px) {
  .about {
    padding: 80px 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .large-text {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
