<template>
  <div class="home-all-cards">
    <div v-for="p in projects">
      <ProjectCard v-if="p['categ'] === 'Design Graphique'" :project="p" />
    </div>
  </div>

</template>

<script setup lang="ts">
  import {useAsyncData} from "#app";

  definePageMeta({
    layout: 'default'
  })

//const { data:projects } = await useFetch('projects.json')
  const { data:projects } = await useAsyncData('./projects.json', () => {
    return $fetch('./projects.json')}, { lazy: true, server: false })


</script>