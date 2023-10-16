<template>
  <div class="default-layout">
    <header class="default-layout-header">
      <div class="layout-name">
        <NuxtLink to="/">
          <p>SCHMITT</p>
          <p>Mathilde</p>
        </NuxtLink>
      </div>
      <div class="layout-desc">
        <p>Étudiante en 3e année <br/> de design graphique et digital</p>
      </div>

      <nav class="layout-nav-projects">
        <div>
          <ul>
            <li><NuxtLink to="/designgraphique">Design Graphique</NuxtLink></li>
            <li><NuxtLink to="/directionartistique">Direction Artistique</NuxtLink></li>
            <li><NuxtLink to="/ideationcreativite">Idéation Créativité</NuxtLink></li>
            <li><NuxtLink to="/infographie">Infographie</NuxtLink></li>
            <li><NuxtLink to="/prjtgroupe" >Projet de groupe</NuxtLink></li>
            <li><NuxtLink to="/pfa">Projet de fin d'année</NuxtLink></li>
            <li><NuxtLink to="/webdesign">Web Design</NuxtLink></li>
          </ul>
        </div>
      </nav>

      <div class="layout-social">
        <div class="layout-social-line">
          <img class="layout-social-logo" alt="insta" src="~/assets/img/logo_instagram.png"/>
          <NuxtLink to="https://www.instagram.com/ukichrom/" target="_blank">Instagram</NuxtLink>
        </div>
        <div class="layout-social-line">
          <img class="layout-social-logo" alt="insta" src="~/assets/img/174857.png"/>
          <NuxtLink to="https://www.behance.net/mathilde_schmitt" target="_blank">LinkedIn</NuxtLink>
        </div>
        <div class="layout-social-line">
          <img class="layout-social-logo" alt="insta" src="~/assets/img/Behance-Logo.png"/>
          <NuxtLink to="https://www.linkedin.com/in/mathilde-schmitt-674b47231/" target="_blank">Behance</NuxtLink>
        </div>
      </div>
    </header>

    <div>
      <img class="layout-delimitor" alt="delimitor" src="~/assets/img/Groupe_3.png"/>
    </div>

    <div class="from-layout-content">
      <slot />
    </div>
  </div>

</template>

<script setup lang="ts">
  import '~/assets/css/styles.css'
</script>