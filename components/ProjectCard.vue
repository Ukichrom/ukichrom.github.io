<template>
  <div class="card">
    <a :href="project.link" target="_blank">
      <div class="card-image">
        <img class="front" alt="img projet" :src="project.front"/>
        <img class="back" alt="img back" :src="project.back"/>
      </div>
    </a>
  </div>
</template>

<script setup>
  const { project } = defineProps(['project'])
</script>

<style>

</style>