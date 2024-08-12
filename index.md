---
# https://vitepress.dev/reference/default-theme-home-page
layout: home 

hero:
  name: "Catherine VU"
  text: Prépare une alternance en Mastère Direction artistique UX UI
  tagline: Créer des expériences digitales inoubliables 
  image1:
    src: /Acceuil_PORTFOLIOS.png
    alt: project_thé
  image2:
    src: /landing_page_desktop_peluche.jpg
    alt: project_peluche
  
  
  actions:
    - theme: brand
      text: Mes formations
      link: /formations/
    - theme: alt
      text: Mes projets
      link: /projets/

#  definir le besoin du recruteur 
# présentation
# Dire que je suis la personne idéal formation et expériences et savoir etre donc comment je repond à leur besoin

---

<ProjectCard
  title="Mariée Sauvage"
  description="Dans ce projet "
  href="https://www.figma.com/proto/VNwXG9a8Bi28nGVvRSekyA/Mari%C3%A9e-Sauvage?page-id=60%3A38&node-id=337-228&viewport=231%2C171%2C0.03&t=G3Cc01n2qlgEXg0R-1&scaling=scale-down&content-scaling=z"
  image="/Accueil_mariee_sauvage_coupe.webp"
/>

<VPButton
  tag="button"
  size="medium"
  theme="brand"
  alin-items="center"
  text="Plonger dans mon univers créatif"
  href="https://www.behance.net/catherinevu1"
/>

<script setup lang="ts">

import { VPButton } from 'vitepress/theme'

import ProjectCard from './components/ProjectCard.vue'

</script>

<style>
  body {
    background-color: #f9f9f9;
  }

.VPHero .main .name ,.VPHero .main .clip{
  font-size: 48px;
}

.VPHero .main .text{
  font-size: 36px;    
}

.VPHero .VPImage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;
  margin-bottom: 20px;
  position: absolute, top, left;
  
}

.VPImage1{
  filter: drop-shadow(5px 5px 5px gray);
  background-size: 500px;
  z-index: -2;
  position: absolute; 
  left: 40px;
  width: 500px; /* Set a width for the image */
  height: auto;  
}

.VPImage2{
  filter: drop-shadow(10px 10px 5px gray);
  background-size: 500px;
  z-index: -1;
  left: 190px;
  top: 120px;
  position: absolute;
  width: 400px; /* Set a width for the image */
  height: auto;
}

.ProjectCard{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.VPHome .VPButton {
  text-decoration: none;
}

</style>
