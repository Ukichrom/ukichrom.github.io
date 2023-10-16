<template>
  <div class="home-all-cards">
    <div v-for="p in projects">
      <ProjectCard v-if="p['categ'] === 'Infographie'" :project="p" />
    </div>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { data:projects } = await useFetch('projects.json')

</script>