<script setup lang="ts">
const projectKeys = [
  {
    id: 'vicasa',
    title: 'VICASA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'storely',
    title: 'STORELY',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hadj',
    title: 'HADJ.UZ',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1564767609342-620cb19b2357?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'abiturient',
    title: 'ABITURIENT',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200'
  }
]
</script>

<template>
  <section id="projects" class="projects">
    <div class="section-container">
      <div class="section-header">
        <h2 class="mono">{{ $t('projects.header') }}</h2>
        <div class="line"></div>
      </div>

      <div class="projects-grid">
        <div v-for="project in projectKeys" :key="project.title" class="project-card">
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div class="project-overlay">
              <span class="mono">{{ $t('projects.view_case') }}</span>
            </div>
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span class="mono">{{ $t(`projects.${project.id}.category`) }}</span>
              <span class="mono">{{ project.year }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p class="project-desc">{{ $t(`projects.${project.id}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 100px 0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.section-header h2 {
  white-space: nowrap;
}

.line {
  height: 1px;
  background: var(--border-color);
  flex-grow: 1;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  border: 1px solid var(--border-color);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  filter: grayscale(100%);
}

.project-card:hover .project-image {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 8, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-info h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-desc {
  color: var(--text-secondary);
  max-width: 400px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
