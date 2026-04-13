<template>
  <footer id="contact" class="footer">
    <div class="section-container">
      <div class="footer-top">
        <h2 class="mono label">{{ $t('footer.label') }}</h2>
        <div class="cta-container">
          <a href="mailto:hello@alibek.design" class="massive-link">HELLO@ALIBEK.DESIGN</a>
          <div class="social-links">
            <a href="https://t.me/alibek_abdusamadov" target="_blank" class="mono hover-link">TELEGRAM</a>
            <a href="#" target="_blank" class="mono hover-link">LINKEDIN</a>
            <a href="#" target="_blank" class="mono hover-link">INSTAGRAM</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <span class="mono">{{ $t('footer.copyright') }}</span>
        <span class="mono">{{ $t('footer.crafted') }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 100px 0 50px;
  border-top: 1px solid var(--border-color);
}

.footer-top {
  margin-bottom: 6rem;
}

.massive-link {
  font-size: clamp(2rem, 8vw, 6rem);
  font-family: var(--font-heading);
  text-decoration: none;
  color: var(--text-primary);
  display: block;
  margin: 2rem 0;
  transition: color 0.3s ease;
}

.massive-link:hover {
  color: var(--accent-color);
  -webkit-text-stroke: 1px var(--accent-color);
}

.social-links {
  display: flex;
  gap: 2rem;
}

.social-links a {
  text-decoration: none;
  color: var(--text-secondary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }
  .massive-link {
    font-size: 2.5rem;
  }
  .social-links {
    flex-direction: column;
    gap: 1rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
}
</style>
